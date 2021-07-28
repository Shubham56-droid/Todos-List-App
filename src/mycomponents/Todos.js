import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container ">
            <h2 className="text-center my-3">Todos List</h2>
              <hr />
        {/* Here we are rendering  the  items  from  the  TodoItem */}

        {props.todos.length===0? <p className="text-center">No Todos To Display In The List</p>:

        props.todos.map((todo)=>{   
            return( 
            
             <TodoItem todo={todo}  key={todo.sno}   onDelete={props.onDelete} />  
            
            ) 
        })
        }
       
         
            
        </div>
    )
}
