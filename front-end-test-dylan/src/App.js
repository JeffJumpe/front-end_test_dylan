import React, { Component } from 'react';
import BarChart from 'react-d3-basic';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var generalChartData = [
      {
        letter: "A",
        frequency: .08167
      },
      {
        letter: "B",
        frequency: .01492
      },
      {
        letter: "C",
        frequency: .02782
      },
      {
        letter: "D",
        frequency: .04253
      },
      {
        letter: "E",
        frequency: .12702
      }
    ]

    var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10, "%"];

    return (
      <BarChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xLabel= {xLabel}
        xScale= {xScale}
        yTicks= {yTicks}
        yLabel = {yLabel}
      />
    );
  }
}

export default App;
