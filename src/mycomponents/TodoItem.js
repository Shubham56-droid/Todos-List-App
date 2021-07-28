import React from 'react'


export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="my-3 box-todoitem">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="button-but" onClick={ ()=>{onDelete(todo)}}><h6>Delete</h6></button>
        </div>
    )
}


