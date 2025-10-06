import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'  // шляхи відносні до цього файлу
import TodoItems from './TodoItems'

const Todo = () => {
// useState([]) створює порожній масив станів з початковим значенням []
// todoList — змінна, що містить поточний масив завдань
// setTodoList — функція, яка оновлює цей масив (і викликає повторний рендер)
    console.log(todoList);
const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);

// присвоюємо змінній inputRef хук useRef()
// цей хук створює обєкт { current: undefined }, який React використовує для збереження посилання на DOM-елемент
const inputRef = useRef()

const add = () => {
    // створюємо нову змінну, що зчитує поточне значення поля введення через inputRef
    // .current — це сам DOM-елемент, .value — його текст
    // trim() прибирає зайві пробіли на початку і в кінці рядка
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
        return null;
    }


    // створюємо один новий обкєт у списку
    // обєект буде мати айді з чатсом у мілісекндах
    // текст з інпуту
    // та прапорець виконаності
    const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }

    // отрмуємо попрередній масив і створюємо новий з додаванням нового обєкту
    setTodoList((prev) => [...prev, newTodo]);

    // після додаваня задачі вручніі очищуємо поле вводу
    // вручну бо useRef не викликає рендер
    inputRef.current.value = "";
}

const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
        return prvTodos.filter((todo) => todo.id !== id)
    })
}

const toggle = (id) => {
    setTodoList((prevTodos) => {
        return prevTodos.map((todo) => {
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
}

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
},[todoList])


    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex-col p-7 min-h-[550px] rounded-xl '>

            {/* -------- title --------- */}
            <div className="flex items-center mt-7 gap-2">
                <img className="w-8 h-full" src={todo_icon} alt="" />
                <h1 className="text-3xl font-semibold">To-do list</h1>
            </div>
            {/* ---------input box--------- */}
            <div className="flex items-center my-7 rounded-full bg-gray-300 gap-2" >
                <input ref={inputRef} className='border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={add} className='bg-orange-500 text-lg font-medium cursor-pointer text-white rounded-full h-14 w-32'>ADD +</button>
            </div>
            {/* --------todo list ---------- */}
            {todoList.map((item, index) => {
                return <TodoItems 
                key={index} 
                text={item.text} 
                id={item.id} 
                isComplete={item.isComplete} 
                deleteTodo={deleteTodo}
                toggle={toggle}
                />
            })}

        </div>
    )
}

export default Todo