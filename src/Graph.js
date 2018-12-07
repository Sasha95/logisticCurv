import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { Tex } from "react-tex";

const lam = "\\lambda";
const xn = "\\x_{n}";

const options = {
  chart: {
    type: "scatter",
    zoomType: "xy"
  },
  title: {
    text: "Бифуркационные диаграммы"
  },
  series: [
    {
      data: [
        [161.2, 51.6],
        [167.5, 59.0],
        [159.5, 49.2],
        [157.0, 63.0],
        [155.8, 53.6]
      ]
    }
  ],
  xAxis: {
    title: {
      enabled: true,
      text: "lambda"
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
  },
  yAxis: {
    title: {
      text: "x_n"
    }
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 2,
        states: {
          hover: {
            enabled: true
            // lineColor: "rgb(100,100,100)"
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        pointFormat: "{point.x} lambda, {point.y} x_n"
      }
    }
  }
};

export const Plot = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
