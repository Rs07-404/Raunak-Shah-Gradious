import React, {useContext, useState} from "react";
import { TodoListContext } from "../../context/TodoListContext";
import "./form.css";

function Form(){
    const {list, addTask, deleteTask} = useContext(TodoListContext);
    const [inputValue, changeInput] = useState("");

    const handleChange = (event)=>{
        changeInput(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(inputValue !== ""){
            addTask(inputValue);
        }
        changeInput("");

    }
    return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" placeholder='Add a new task...' onChange={handleChange} value={inputValue} />
          <input type="submit" value="Add" />
        </form>
    )
}

export default Form;