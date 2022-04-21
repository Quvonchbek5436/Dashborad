import React from "react";
import ReactApexChart from "react-apexcharts";

function BarChart() {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        barHeight: "30%",
        horizontal: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 0,
              color: undefined,
            },
          ],
          backgroundBarColors: ["primary.main"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 0,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    datasets: [
      {
        backgroundColor: ["red"],
      },
    ],
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
}

export default BarChart;
