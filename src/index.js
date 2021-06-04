import React from "react";
import ReactDOM from "react-dom";

import AppHeader from"./components/app-header";
import SearchPanel from"./components/search-panel";
import TodoList from"./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

import"./components/index.css";
   
const App =()=>{

    const todoData = [
        {label : "Driknk Coffee", important : false , id: 1},
        {label : "Build React App", important : true, id: 2 }, 
        {label : "Have a lunch", important : false, id: 3}
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList  todos = {todoData}/>
            <ItemStatusFilter />
        </div>
       );
} ;



ReactDOM.render(<App/>, document.getElementById("root") ) ;