import React from "react";

import AnalyticsChart from "../../components/analytics/analyticsChart/AnalyticsChart";

import History from "../../components/analytics/history/History";

import "./Analytics.scss";

const Analytics = () => {

    return (
        <section className="page analytics-page">
            <div className="container">
                <AnalyticsChart />
                <History />
            </div>
        </section>
    )

}

export default Analytics;