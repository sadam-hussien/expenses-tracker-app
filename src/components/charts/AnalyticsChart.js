import React from "react";

import ReactApexChart from "react-apexcharts";

class AnalyticsApexChart extends React.Component {

    constructor(props) {

        super(props);

        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const currenDate = new Date();

        let currentDay = currenDate.getDate(); // e.g: 14

        let currentDayIndex = currenDate.getDay(); // return the day index

        const theChart = [];

        const theLastDay = currentDay - 7;

        while (currentDay > theLastDay) {

            theChart.push(currentDay + " " + days[currentDayIndex]);

            currentDay--;

            const newDate = new Date(currenDate.getMonth() + 1 + "/" + currentDay + "/" + currenDate.getFullYear()).getDay();

            currentDayIndex = newDate;
            
        }
        
        this.state = {
        
            series: [
                {
                    name: 'income',
                    data: [44, 60, 57, 56, 61, 58, 63]
                }, 
                {
                    name: 'expenses',
                    data: [76, 85, 101, 98, 87, 105, 91]
                },
            ],
            options: {
                colors: ['#F09B95', '#116CD5'],
                title: {
                    text: "Analysis Within the Week",
                    align: 'left',
                    margin: 20,
                    style: {
                        textTransform: "capitalize",
                        fontSize:  '16px',
                        fontWeight:  'normal',
                        color:  '#111517'
                    },
                },
                grid: {
                    show: false,
                },
                chart: {
                    type: 'bar',
                    height: 350,
                    // background: '#fff',

                },

                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 4,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: theChart,
                },
                yaxis: {
                    show: false,
                },
            fill: {
                opacity: 1,
                // colors: ["#874678"],
                // opacity: 0.9,
                // type: 'solid',
            },
            tooltip: {
                y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
                }
            }
            },
        
        };
    }

    render() {
        return (
            <div id="analytics-chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={320} width={"100%"} />
            </div>
        );
    }
}

export default AnalyticsApexChart;