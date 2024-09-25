import React, {createContext, useState} from "react";

export const TodoListContext = createContext();

export const TodoContextProvider = ({children}) => {
    const [list, updateList] = useState([]);

    const addTask = (newTask)=>{
        updateList((list)=>[...list, newTask]);
    }

    const deleteTask = (index)=>{
        updateList((list)=>list.filter((data, i)=> i !== index ));
    }

    return(
        <TodoListContext.Provider value={{list, addTask, deleteTask}}>
            {children}
        </TodoListContext.Provider>
    )
}