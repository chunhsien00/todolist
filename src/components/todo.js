import React from 'react'

export default function todo(props) {
    console.log('render todo')
    const deleteItem = props.cancel

    const handleclick = () => { 
        deleteItem(props.id)
    }

    return (
        <div>
            <input type="checkbox"></input>
            {props.todo2}
            {<button onClick={handleclick}>x</button>}
        </div>
    )
}
