import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { Points, Line } from "./Points";

export const Plot = () => {
  const options = {
    chart: {
      type: "scatter",
      zoomType: "xy",
      height: "40%"
    },
    title: {
      text: "Бифуркационные диаграммы"
    },
    series: [
      {
        name: "Отображение",
        data: Points()
      },
      {
        name: "1",
        color: "rgba(223, 83, 83, .5)",
        data: Line(0.76)
      },
      {
        name: "2",
        color: "rgba(223, 83, 83, .5)",
        data: Line(1.26)
      },
      {
        name: "3",
        color: "rgba(223, 83, 83, .5)",
        data: Line(1.37)
      }
    ],
    xAxis: {
      title: {
        enabled: true,
        text: "mu"
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
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
