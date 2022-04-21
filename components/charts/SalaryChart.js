import React from 'react';
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

function SalaryChart(props) {

    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }]
    const options = {
        chart: {
            height: 80,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        },
        legend: {
            show: false
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        }
    }

    return (
        <ReactApexChart options={options} series={series} type="area" height={80}/>
    );
}

export default SalaryChart;