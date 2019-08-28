import React from "react"
import { observer } from "mobx-react"
import Xlr8rms from "./helpers/xlr8rms"
const xlr8rms = new Xlr8rms();


@observer
export default class TodoList extends React.Component {

  render() {

   const { store: { todos: data, operation } } = this.props

    const todoLis = 
      <table>
        <tbody>
          {
            data.map((todo, indexData) => {
              return  <tr key={indexData}>
                  <td>Data {indexData + 1}</td>
                  {
                      Object.keys(todo.data).map((key, index)=>{
                        return <td key={index}> {todo.data[key]} </td>
                      })
                  }
              </tr>
            })
          }
        </tbody>
      </table>
   
    return <div>
      <h1>todos</h1>
        <h3>
        { operation }
        </h3>
      {/* <input className="new" onKeyPress={this.createNew.bind(this)} />
      <input className="filter" value={filter} onChange={this.filter.bind(this)} /> */}
      <div>{todoLis}</div>
      {/* <a href="#" onClick={clearComplete}>Clear Complete</a> */}
    </div>
  }
}

 /*
    // let todoLis = null;

    // for (let index = 0; index < data.length; index++) {
    //   const item = data[index]
    //   todoLis +=
    //     <li key={index}> 
    //       <input type="checkbox" />
    //       <span>{index}</span>
    //     </li>
    // }

    let todoLis = !data ? <div></div> : data.map(todo => {

      console.log(todo)

      return (
        <li key={todo.key}>
          <input
            type="checkbox"
          // onChange={this.toggleComplete.bind(this, todo)} 
          // value={todo.complete} 
          // checked={todo.complete} 
          />
          {
            Object.keys(todo.data).map((key, index)=>{
               return <p key={index}>{key} : {todo.data[key]}</p>
            })
          }

        </li>
      )

    })
    */