import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: [25, 75],

            options: {

                chart: {
                  type: 'donut',
                  background: 'transparent'
                },

                plotOptions: {
                  pie: {
                    startAngle: 0,
                    endAngle: 360
                  }
                },
                

                dataLabels: {
                  enabled: false
                },

                fill: {
                  type: 'solid',
                  colors: ['#ffffff', 'rgba(255, 255, 255, .05)'],
                },

                legend: {
                  show: false
                },

                tooltip: {
                  enabled: false
                },

                stroke: {
                  show: false,      
                },

                responsive: [
                  {
                    breakpoint: 576,

                    options: {
                      chart: {
                        width: 125
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  },

                ]

            },
        
        };
    }

    render() {
      return (
        <div id={this.props.id}>
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={this.props.width} />
        </div>
      );
    }
}

export default ApexChart;