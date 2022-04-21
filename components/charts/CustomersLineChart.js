import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class CustomersLineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Monthly Sales",
          data: [1, 19, 3, 13, 2, 19],
        },
      ],
      options: {
        zoom: {
          enabled: false,
        },
        chart: {
          type: "line",
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
        stroke: {
          width: [3, 3],
          curve: "smooth",
        },
        colors: ["#fff"],
        grid: {
          show: false,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          crosshairs: {
            show: false,
            width: 5,
            opacity: 0.9,
          },
          axisTicks:{
            show:false
          },
          axisBorder:{
            show:false
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
        // fill: {
        //   opacity: 0.8,
        // },
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
          height={80}
        />
      </div>
    );
  }
}
