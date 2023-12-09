/**
 Created by: carlos
 At: 7/12/23 - 16:08
 */
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import * as yup from 'yup'
import {todoDelete, todoPOST} from "@/yup/schemas";
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
        skip:+skip,
        orderBy:{
            createdAt:'asc'
        }

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
export async function DELETE(request: Request) {
    try{
        const {complete} =await todoDelete.validate(await  request.json());

        if(complete){
            await  prisma.todo.deleteMany({where:{complete:true}});
        }else{
            await  prisma.todo.deleteMany();
        }
        return NextResponse.json({success:true})
    }catch (e){
        return NextResponse.json({e},{status:400})
    }
}