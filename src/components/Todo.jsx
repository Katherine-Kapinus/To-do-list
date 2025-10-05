import React from 'react'
import todo_icon from '../assets/todo_icon.png'  // шляхи відносні до цього файлу
import TodoItems from './TodoItems'

const Todo = () => {
    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex-col p-7 min-h-[550px] rounded-xl '>

            {/* -------- title --------- */}
            <div className="flex items-center mt-7 gap-2">
                <img className="w-8 h-full" src={todo_icon} alt="" />
                <h1 className="text-3xl font-semibold">To-do list</h1>
            </div>
            {/* ---------input box--------- */}
            <div className="flex items-center my-7 rounded-full bg-gray-300 gap-2" >
                <input className='border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button className='bg-orange-500 text-lg font-medium cursor-pointer text-white rounded-full h-14 w-32'>ADD +</button>
            </div>
            {/* --------todo list ---------- */}
            <TodoItems text="learn coding" />
            <TodoItems text="Do shoping" />
            <TodoItems text="Go sleep" />
        </div>
    )
}

export default Todo