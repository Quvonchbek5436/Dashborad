import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class RevenueChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Earnings",
          data: [0, 5, 6, 8, 25, 9, 11, 24],
        },
        {
          name: "Expense",
          data: [0, 3, 1, 2, 8, 1, 5, 1],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "line",
          zoom: {
            enabled: false,
          },
          grid: {
            show: false,
          },
          animations: {
            enabled: true,
          },
        },
        stroke: {
          width: [3, 3],
          curve: "smooth",
        },
        labels: [
          "16/08",
          "17/08",
          "18/08",
          "19/08",
          "20/08",
          "21/08",
          "22/08",
          "23/08",
        ],

        markers: {
          size: [5, 5],
        },

        colors: ["#00dac5", "#777E89"],
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={285}
        />
      </div>
    );
  }
}
