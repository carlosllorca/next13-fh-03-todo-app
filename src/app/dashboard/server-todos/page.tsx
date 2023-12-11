export const dynamic = 'force-dynamic'
export const revalidate=0;

import {Metadata} from "next";
import prisma from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";
import {NewTodo} from "@/todos";

export const metadata:Metadata={
    title:'Listado de Todos',
    description:'Todos registrados.'
}
export default async function ServerTodosPage(){
    const todos = await prisma.todo.findMany({orderBy:{description:'asc'}})

    return (
        <>
            <span className={'text-3xl mb-10'}>Server actions</span>
            <div className={'w-full px-3 mx-5 mb-5'}>
                <NewTodo/>
            </div>
            <TodosGrid todos={todos}/>
        </>
    );
};
