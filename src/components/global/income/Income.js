import React, {useContext} from "react";

import {GlobalContext} from "../../../context/GlobalContext";

import "./Income.scss";

const Income = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(item => item.amount);

    const income = amounts.filter(item => item > 0).reduce((prev, current) => prev += current, 0).toFixed(2);

    return (
        <div className="income">
            <div className="title-balance-box d-flex align-items-center">
                <span className="shape"></span>
                <h5 className="title-balance-box-inner text-capitalize">income</h5>
            </div>
            <h2 className="amount">$ {income}</h2>
        </div>
    )

}

export default Income;