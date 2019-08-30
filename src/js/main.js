import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoList from "./TodoList"
import  "devextreme-react/";


const app = document.getElementById("app")

ReactDOM.render(<TodoList store={TodoStore} />, app);


//npm i -g devextreme-cli
//devextreme add devextreme-react




