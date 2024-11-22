import { useEffect } from "react"
import React, {useState} from 'react'

function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect( ()=> {
        setFiltered(todo)
    }, [todo])


    function todoFilter(status) {
        if(status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter( item => item.status === status)
            setFiltered(newTodo)
        }

    }



    function deleteTodo(id) {
       let newTodo = [...todo].filter(item => item.id!=id)
       setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)

    }

    function saveTodo (id) {
        let newTodo = [...todo].map(item => {
            if(item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)

    }

    return (
        <div>

            <div>
            <button onClick={ () =>todoFilter('all') }>Все</button>
            <button onClick={ () =>todoFilter('true') }>Открытые</button>
            <button onClick={ () =>todoFilter('false') }>Закрытые</button>
            </div>


            {
                filtered.map( item => (
                    <div key={item.id}>
                        {
                            edit == item.id ?
                            <div>
                            <input value={value} onChange={(e)=>setValue(e.target.value)} />    
                            </div> :
                            <div>{ item.title }</div>
                        }

                        {
                            edit == item.id ?
                            <div>
                                <button onClick={ () => saveTodo(item.id) }>Сохранить</button>
                            </div> :
                            <div>
                                <button onClick={ () =>deleteTodo(item.id) }>Удалить</button>
                                <button onClick={ () =>editTodo(item.id, item.title) }>Редактировать</button>
                                <button onClick={ () =>statusTodo(item.id) }>Закрыть Открыть</button>
                            </div>
                        }
                    
                    
                    </div>
                ))
            }
        </div>
    );
}

export default TodoList