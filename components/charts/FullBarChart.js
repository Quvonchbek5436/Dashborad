import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class FullBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Monthly Earnings",
          data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12],
        },
      ],
      tooltip: {
        enabled: false,
      },
      options: {
        zoom: {
          enabled: false,
        },
        chart: {
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%",
            endingShape: "rounded",
            barHeight: "3px !important",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        stroke: {
          show: false,
          width: 10,
          colors: ["#fff"],
        },
        colors: ["#fff"],
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },
        fill: {
          opacity: 0.8,
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
          height={80}
        />
      </div>
    );
  }
}
