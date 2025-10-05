import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text}) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className="flex flex-1 items-center cursor-pointer">
                <img className='w-8' src={tick} alt="" />
                <p className='text-slate-700 ml-4 font-medium text-lg'>{text}</p>
            </div>
            <img className='w-6 cursor-pointer' src={delete_icon} alt="" />
        </div>
    )
}

export default TodoItems