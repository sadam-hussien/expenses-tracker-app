import React from 'react';

import HistoryItem from './historyItem/HistoryItem';

import "./History.scss";

const History = () => {

    return (
        <section className="balance-history">

            {/* start title  */}
            <div className="title d-flex align-items-center justify-content-between">
                <h4 className="text text-capitalize m-0">balance history</h4>
            </div>
            {/* ****** end title  */}

            <div className="history-box">
                <div className="row">
                    <div className="col-lg-4">
                        <HistoryItem theDate={new Date().getDate()} />
                    </div>
                    <div className="col-lg-4">
                        <HistoryItem theDate={new Date().getDate() - 1} />
                    </div>
                    <div className="col-lg-4">
                        <HistoryItem theDate={new Date().getDate() - 2} />
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default History;