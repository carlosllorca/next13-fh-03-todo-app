'use client'
import {Todo} from "@prisma/client";
import {TodoItem} from "@/todos";
import * as todoFetch from '@/todos/helpers/todos'
import {useRouter} from "next/navigation";
import {toggleTodo} from "@/todos/actions/todo-actions";
interface Props{
    todos:Todo[]
}
const TodosGrid = ({todos=[]}:Props) => {
    const router = useRouter()
    // const toggleTodo = async (id:string, complete:boolean)=>{
    //     const updatedTodo = await todoFetch.updateTodo(id,complete);
    //     router.refresh();
    // }

    return (
        <div className={ 'grid grid-cols-1 sm:grid-cols-3 gap-2'}>
            {
                todos.map(todo=><TodoItem toggleTodo={toggleTodo}  todo={todo} key={todo.id}/>)
            }
        </div>
    );
};
export default TodosGrid
