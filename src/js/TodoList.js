import React from "react"
import { observer } from "mobx-react"
import Xlr8rms from "./helpers/xlr8rms"
import Bar from './components/Bar'

const xlr8rms = new Xlr8rms();

@observer
export default class TodoList extends React.Component {

  render() {
    
   const { store: { todos: data, calcResult } } = this.props
   let teste = calcResult;
  
    const todoLis = 
      <table className="table, table-bordered">
        <tbody>
          {
            data.map((todo, indexData) => {
              return  <tr key={indexData}>
                  <td className ="scope">Dados {indexData + 1}</td>
                  {
                      Object.keys(todo.data).map((key, index)=>{
                        return <td key={index}> {todo.data[key]} </td>
                      })
                  }
              </tr>
            })
          }
        </tbody>       
        <tfoot>
          <tr>
          <td>Operação: </td>
            {             
              teste.map((value, index) =>{
                return <td key={ index }><input value = { teste [index] } /> </td>
              })
            }
          </tr>
        </tfoot>
      </table>
   
    return <div>
      <h1>Dados</h1>
      <div>{todoLis}</div>  
      <div>
      
      <Chart id={'chart'} dataSource={indexData}>
        <Series
          valueField={'oranges'}
          argumentField={'todo.data'}
          name={'My oranges'}
          type={'bar'}
          color={'#ffaa66'} />
      </Chart>
      
      <div>
        <Bar />
      </div>
      
      </div>  
    
    </div>
  }
}



