'use client'
import {startTransition, useOptimistic} from 'react'
import {Todo} from "@prisma/client";
import styles from './todoItem.module.css'
import {IoCheckboxOutline, IoSquareOutline} from "react-icons/io5";
/**
 Created by: carlos
 At: 9/12/23 - 14:36
 */
interface Props{
    todo:Todo
    toggleTodo:(id:string,complete:boolean)=>Promise<Todo|void>

}
export const TodoItem = ({todo,toggleTodo,}:Props) => {
    const [todoOptimistic,toggleTodoOptimistic] = useOptimistic(todo,
        (state,newCompleteValue:boolean)=>({...state,complete:newCompleteValue}))
    const onToggleTodo = async ()=>{
        try{
            startTransition(()=>toggleTodoOptimistic(!todoOptimistic.complete))

            await toggleTodo(todoOptimistic.id,!todoOptimistic.complete)
        }catch (e){
            startTransition(()=>toggleTodoOptimistic(!todoOptimistic.complete))
        }


    }
    return (
        <div className={todoOptimistic.complete?styles.todoDone:styles.todoPending} >
            <div className={'flex flex-col sm:flex-row justify-start items-center gap-4'}>
                <div
                    onClick={()=>onToggleTodo()}
                    className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100`}>
                    {
                        todoOptimistic.complete?
                            <IoCheckboxOutline size={30} />:
                            <IoSquareOutline size={30}/>
                    }
                </div>
                <div className={'text-center sm:text-left'}>
                    {todoOptimistic.description}
                </div>
            </div>
        </div>
    );
};
