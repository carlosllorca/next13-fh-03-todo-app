'use server'
import prisma from "@/lib/prisma";
import {Todo} from "@prisma/client";
import {revalidatePath} from "next/cache";

export const sleep = async (seconds=0)=>{
        return new Promise((resolve => setTimeout(resolve,seconds*1000)))
}
export const toggleTodo = async (id:string, complete:boolean):Promise<Todo>=>{
   // await sleep(5)
    const todo = await prisma.todo.findFirst({where:{id}})
    if(!todo){
        throw new Error('Todo not found')
    }
    const updatedTodo = await prisma.todo.update({where:{id},data:{complete}})
    revalidatePath('/dashboard/server-todos')
    return updatedTodo
}
export const addTodo = async (description:string):Promise<Todo|{message:string}>=>{
    try{

        const todo =await  prisma.todo.create({data:{complete:false,description}});
        revalidatePath('/dashboard/server-todos');
        return todo;
    }catch (e){
        return {message:'Error'}
    }
}
export const deleteTodo = async (complete:boolean=false):Promise<{success:boolean}>=>{
    try{
        if(complete){
            await  prisma.todo.deleteMany({where:{complete:true}});
            revalidatePath('/dashboard/server-todos')
        }else{
            await  prisma.todo.deleteMany();
        }

        return {success:true}
    }catch (e){
        return {success:false}
    }
}
