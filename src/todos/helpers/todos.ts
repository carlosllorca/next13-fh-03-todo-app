import {Todo} from "@prisma/client";

export const updateTodo = async(id:string,complete:boolean):Promise<Todo>=>{
    const body = {complete};
    return await fetch(`/api/todos/${id}`,{
        method:'PUT',
        body:JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>response.json());

}
export const deleteTodo = async(id:string):Promise<Todo>=>{
    return await fetch(`/api/todos/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>response.json());

}
export const deleteCompleted = async():Promise<Todo>=>{
    const body = {complete:true};
    return await fetch(`/api/todos`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }).then(response=>response.json());

}
export const createTodo = async(description:string):Promise<Todo>=>{
    const body = {description};
    return await fetch(`/api/todos`,{
        method:'POST',
        body:JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response=>response.json());

}