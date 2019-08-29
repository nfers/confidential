//import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoList from "./TodoList"
import Bar from "./components/Bar"
import "bootstrap/dist/css/bootstrap.min.css"

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const app = document.getElementById("app")

ReactDOM.render(   
    <TodoList store={TodoStore} />, app);

//npm i -g devextreme-cli
//devextreme add devextreme-react




