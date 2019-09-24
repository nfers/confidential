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
