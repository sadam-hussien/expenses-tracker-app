import React, {useContext} from "react";

import {GlobalContext} from "../../../context/GlobalContext";

import "./Expenses.scss";

const Expenses = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(item => item.amount);

    const expenses = (amounts.filter((item => item < 0)).reduce((prev, current) => prev += current, 0) * -1).toFixed(2);

    return (
        <div className="expenses">
            <div className="title-balance-box d-flex align-items-center">
                <span className="shape"></span>
                <h5 className="title-balance-box-inner text-capitalize">expenses</h5>
            </div>
            <h2 className="amount">$ {expenses}</h2>
        </div>
    )

}

export default Expenses;