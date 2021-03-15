import React from "react";

import SubHeader from "../../global/subheader/SubHeader";

import AnalyticsApexChart from "../../charts/AnalyticsChart";

import Income from "../../global/income/Income";

import Expenses from "../../global/expenses/Expenses";

import "./AnalyticsChart.scss";

// import { GlobalContext } from "../../../context/GlobalContext";

const AnalyticsChart = () => {

    return (
        <section className="analytics-chart">

            <SubHeader title="the analytics" />

            <div className="analytics-content">
                <div className="row">

                    <div className="col-lg-7">
                        <div className="chart-item">
                            <AnalyticsApexChart />
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="trackers">

                            {/* start income  */}
                            <div className="tracker-item first-tracker">
                                <Income />
                            </div>
                            {/* ******* end income  */}

                            {/* start expenses  */}
                            <div className="tracker-item">
                                <Expenses />
                            </div>
                            {/* ***** end expenses  */}

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )

}

export default AnalyticsChart;