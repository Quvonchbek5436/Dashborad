import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Monthly sales",
          data: [35, 60, 30, 55, 40],
        },
      ],
      tooltip: {
        enabled: false,
      },
      floating: true,
      options: {
        chart: {
          height: 150,
          type: "area",
          toolbar: {
            show: false,
          },
        },

        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: "false",
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
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
          type="area"
          height={100}
        />
      </div>
    );
  }
}
