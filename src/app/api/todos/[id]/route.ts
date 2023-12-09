/**
 Created by: carlos
 At: 8/12/23 - 12:05
 */
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import { todoPUT} from "@/yup/schemas";
import {Todo} from "@prisma/client";
interface Segments{
    params:{
        id:string
    }

}
export async function GET(request: Request,segments:Segments) {
    const result = await findByUUid(segments);
    if(result){
        return NextResponse.json({
            todo: result
        });
    }else{
        return NextResponse.json({
            error: 'Todo not found'
        },{status:404});
    }

}
export async function PUT(request: Request,segments:Segments) {
    const result = await findByUUid(segments);

    if(result){
        try{
            const {complete,description} = await todoPUT.validate(await request.json());
            const todo = await prisma.todo.update({
                where: {id: segments.params.id},
                data:{complete,description}
            })
            return NextResponse.json({
                todo: todo
            });
        }catch (e){
            console.log(e)
            return NextResponse.json({error:'Error updating data.',e},{status:500})
        }

    }else{
        return NextResponse.json({
            error: 'Todo not found'
        },{status:404});
    }
}
export async function DELETE(request: Request,segments:Segments) {
    const result = await findByUUid(segments);

    if(result){
        await prisma.todo.delete({where:{id:result.id}})
        return NextResponse.json({
            success: true
        });
    }else{
        return NextResponse.json({
            error: 'Todo not found'
        },{status:404});
    }

}
const findByUUid = async (segments:Segments):Promise<null|Todo>=>{
   return prisma.todo.findFirst({where: {id: segments.params.id}});
}