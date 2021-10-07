import React from 'react'
import Todo from './todo'

export default function todolist({ todo1, cancel }) {



    return (
        <div>
           
            {todo1.map(x => <Todo todo2={x.a} key={x.b} id={x.b} cancel={cancel}>  </Todo>)}

        </div>
    )
}
