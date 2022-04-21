import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class SalesLineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Ample Admin",
          data: [355, 390, 300, 350, 390, 180],
        },
        {
          name: "Pixel Admin",
          data: [355, 390, 300, 350, 390, 180],
        },
      ],
      tooltip: {
        enabled: false,
      },
      options: {
        colors: ["#00dac5", "#777E89"],
        chart: {
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            endingShape: "rounded",
          },
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
