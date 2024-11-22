import React, {useState} from 'react'

function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    // console.log(value)

    function saveTodo(){
        setTodo(
            [...todo, {
                id: 100,
                title: value,
                status: true
            }]
        )

        setValue('')

    }
    return (
        <div>
            <input placeholder='Ввести задачу' value={value} onChange={ (e)=>setValue(e.target.value)} />
            <button onClick={saveTodo}>Сохранить</button>
            

        </div>
    );
}

export default AddTodo