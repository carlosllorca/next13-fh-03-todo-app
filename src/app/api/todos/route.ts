/**
 Created by: carlos
 At: 7/12/23 - 16:08
 */
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import * as yup from 'yup'
import {todoPOST} from "@/yup/schemas";
export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const take= searchParams.get('take')??'10';
    const skip= searchParams.get('take')??'0';
    if(isNaN(+take)){
        return NextResponse.json({
            message:'Take tiene que ser un numero'
        },{status:400})
    }
    if(isNaN(+skip)){
        return NextResponse.json({
            message:'Skip tiene que ser un numero'
        },{status:400})
    }

    const todos = await prisma.todo.findMany({
        take:+take,
        skip:+skip
    });
    return NextResponse.json({
        todos
    });
}

export async function POST(request: Request) {
    try{
        const {complete,description} =await todoPOST.validate(await  request.json());
        const todo =await  prisma.todo.create({data:{complete,description}});
        return NextResponse.json({todo})
    }catch (e){
        return NextResponse.json({e},{status:400})
    }


}