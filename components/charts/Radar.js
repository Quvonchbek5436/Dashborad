import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Radar = () => {
  const series = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: "",
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
        "English",
        "History",
        "Physics",
        "Geagraphy",
        "Chinese",
        "Math",
      ],
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radar"
      height={285}
    />
  );
};

export default Radar;
