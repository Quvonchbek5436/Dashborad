import React from "react";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

function NewChart() {
    const series = [
        {
            data: [200, 230, 348, 270, 440, 280, 490, 900, 970, 1180],
        },
        {
            data: [400, 430, 448, 470, 540, 580, 690, 700, 1200, 1080],
        },
    ];

    const options = {
        chart: {
            type: "bar",
            height: 230,
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                columnWidth: "30%",
                horizontal: false,
                colors: {
                    ranges: [
                        {
                            from: 0,
                            to: 0,
                            color:undefined,
                        },
                    ],
                    backgroundBarColors: [],
                    backgroundBarOpacity: 2,
                    backgroundBarRadius: 0,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
    };

    return (
        <ReactApexChart options={options} series={series} type="bar" height={280} />
    );
}

export default NewChart;