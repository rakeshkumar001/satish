import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../Redux/TodoList';

const TodoPage = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todos);


    const addToHandler = (e: any) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div>
            <form onSubmit={addToHandler} className="max-w-sm mx-auto flex py-5">
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
            <ul className='mx-auto  max-w-xl'>
                {console.log(todos)}
                {todos.map((todo: { id: any, text: string }) => {
                    return (
                        <li key={todo.id} id={todo.id} className='p-5  rounded-md bg-red-300 flex justify-between mb-5'>
                            {todo.text}
                            <button className='bg-green-400 px-2 py-1 cursor-pointer rounded-lg' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default TodoPage