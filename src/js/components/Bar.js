import React from "react"

import CanvasJSReact from '../../assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Bar = ({ dados }) => {

  const options = {
    title: {
      text: "Dashboard"
    },
    data: [{
      type: "column",
      dataPoints: dados.map(item => ({
        label: '',
        y: item,
      }))
    }]
  }

  return (
    <div>
      <CanvasJSChart options={options}
      /*onRef = {ref => this.chart = ref} */
      />
    </div>
  )
}

export default Bar;
/*
export default class Bar extends React.Component {
  render() {
    const options = {
      title: {
        text: "Dashboard"
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "Dados 1", y: 10 },
          { label: "Dados 1", y: 50 },
          { label: "Operação", y: 40 },
          { label: "Dados 1", y: 30 },
          { label: "Dados 1", y: 20 },
          { label: "Operação", y: 10 },
          { label: "Operação", y: 52 },
          { label: "Operação", y: 123 },
        ]
      }]
    }

    return (
      <div>
        <CanvasJSChart options={options}
        onRef = {ref => this.chart = ref}
        />
      </div>
    );
  }
}
//export default Bar;
*/