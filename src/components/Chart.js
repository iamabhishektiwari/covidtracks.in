import React from "react";
import CanvasJSReact from "../canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart({ options }) {
  return (
    <CanvasJSChart
      options={options}
      /* onRef = {ref => this.chart = ref} */
    />
  );
}

export default Chart;
