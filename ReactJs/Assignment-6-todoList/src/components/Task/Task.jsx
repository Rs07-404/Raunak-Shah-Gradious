import React, { useContext } from "react";
import { TodoContextProvider, TodoListContext } from "../../context/TodoListContext";
import "./task.css";

function Task(props){
    const {deleteTask} = useContext(TodoListContext);
    return(
        <div className="task">
            <div className="delete"><button id={props.index} onClick={()=>{deleteTask(props.index)}} ></button></div>
            <div className="info">{props.task}</div>
        </div>
    )
}

export default Task;