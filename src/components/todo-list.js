import React from "react";

import TodoListItem from "./todo-list-item.js";

const TodoList =()=>{
        return (
        <ul>
            <li> <TodoListItem  label = "Driknk Coffee" /> </li>
            <li> <TodoListItem 
                label = "Build App" 
                important /> </li>
        </ul>
        );
};

export default TodoList;