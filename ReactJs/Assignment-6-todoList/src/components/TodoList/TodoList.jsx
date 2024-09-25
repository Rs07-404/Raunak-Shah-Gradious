import React, { useContext } from "react";
import { TodoContextProvider, TodoListContext } from "../../context/TodoListContext"
import Task from "../Task/Task";
import "./todolist.css"

function TodoList(){
    const {list} = useContext(TodoListContext);
    return(
            <div className="list">
                {(list.length > 0)?
                (list.map((task, index)=><Task key={index} index={index} task={task} />))
                :
                <div className="emptyList">No tasks to do. Add a task to get started!</div>
            }
            </div>
    )
}

export default TodoList;