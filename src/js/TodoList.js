import React from "react"
import { observer } from "mobx-react"
import Xlr8rms from "./helpers/xlr8rms"
import Bar from './components/Bar'
import Avatar from "./components/avatar";


const xlr8rms = new Xlr8rms();

@observer
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex,
    };
  }

  render() {

    const { store: { todos: data, calcResult } } = this.props

    const generateGraph = () => {
      alert('Atualizado!')
    }


    const todoLis =
      <div className="table-responsive">
        <table className="table table-hover table-responsive-sm table table-bordered">
          <tbody>
            {
              data.map((todo, indexData) => {
                return <tr key={indexData}>
                  <td className="scope">Dados {indexData + 1}</td>
                  {
                    Object.keys(todo.data).map((key, index) => {
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
                calcResult.map((value, index) => {
                  return <td key={index}><input value={value} /> </td>
                })
              }
            </tr>
          </tfoot>
        </table>
      </div>

    return (
      <div>

        <div>{todoLis}</div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <button onClick={generateGraph} >GENERATE GRAPH</button>
          </div>

          <Avatar
            url={sessionStorage.getItem('avatar')}
          />

          <Bar
            dados={calcResult}
          />

        </div>

      </div>
    )

  }
}



