import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
export default function DoughnutChart() {
  Chart.register(CategoryScale);

  const data = {
    labels: ["2022", "2021", "2020"],
    datasets: [
      {
        data: [35, 35, 25],
        backgroundColor: ["rgb(3, 201, 215)", "#00dac5", "#777E89"],
        borderWidth: ["1"],
        borderRadius: ["1"],
        borderAlign: ["center"],
        hoverOffset: ["16"],
        cutout: ["80%"],
      },
    ],
  };
  const hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart, args, options) {
      const {
        ctx,
        data,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      ctx.font = "normal 30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.restore();
      ctx.font = "normal 24px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
    },
  };
  const options = {
    rotation: 1 * Math.PI,

    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} plugins={[hoverLabel]} />
    </>
  );
}
