import React, { useContext } from "react";

import {GlobalContext} from "../../../context/GlobalContext";

import SubHeader from "../../global/subheader/SubHeader";

import ApexChart from "../../charts/CureentBalance";

import Income from "../../global/income/Income";

import Expenses from "../../global/expenses/Expenses";

// css file
import "./Balance.scss";


const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(item => item.amount);

    const total = amounts.reduce((prev, current) => prev += current, 0).toFixed(2);

    return (
        <section className="balance">

            <SubHeader title="hello mahmoud !" />

            <div className="balance-items">

                <div className="row align-items-stretch">

                    <div className="col-12 col-lg-5">
                        <div className="balance-box d-flex align-items-center">
                            <ApexChart id="balance-chart" width={180} />
                            <div>
                                <h5 className="text text-capitalize">current balance</h5>
                                <h2 className="amount">$ {total}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7">
                        <div className="balance-box balance-box-details d-flex align-items-center justify-content-between">
                        
                            {/* start income  */}
                            <Income />
                            {/* ******* end income  */}

                            {/* start expenses  */}
                            <Expenses />
                            {/* ***** end expenses  */}

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )

}

export default Balance;