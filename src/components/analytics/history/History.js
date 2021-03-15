import React, { useContext } from "react";

import {GlobalContext} from "../../../context/GlobalContext";

import {IconWallet, IconTrash} from "../../svg/SvgIcons";

// alerts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./History.scss";

const History = () => {

    const {transactions, deleteTransaction} = useContext(GlobalContext);

    // alert
    const notify = () => toast.error("deleted Succefully !");

    // delete item
    const handleDelete = (item) => {

        deleteTransaction(item);

        notify();

    }

    // sort the items based on the date
    const comparison = (a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
    }

    // map on items
    const historyItems = transactions.sort(comparison).map(item => {

        return (
            <li key={item.id} className="history-item-box d-flex align-items-center justify-content-between">

                <div className="single-item-title d-flex align-items-center">
                    <span style={{borderColor: item.amount > 0 ? "#F09B95" : "#116CD5"}}>
                        <IconWallet style={{width: ".9rem", fill: item.amount > 0 ? "#F09B95" : "#116CD5" }} />
                    </span>
                    <h6 className="text m-0">{item.title}</h6>
                </div>

                <div className="single-item-details">
                    <span className={item.amount > 0 ? "amount income-color" : "amount expenses-color"}>
                        {item.amount > 0 ? "+ $" : "- $"} {Math.abs(item.amount)}
                    </span>
                    <button className="delete" onClick={ () => handleDelete(item.id) }>
                        <IconTrash style={{width: "1.2rem", height: "auto"}} />
                    </button>
                </div>

            </li>
        )

    });

    return (
        <section className="analytics-history">

            <ToastContainer position="top-center" />

            {/* start title  */}
            <div className="title d-flex align-items-center justify-content-between">
                <h4 className="text text-capitalize m-0">the history</h4>
            </div>
            {/* ****** end title  */}

            <div className="analytics-history-items">
                <ul className="list-unstyled m-0 p-0">
                    {historyItems}
                </ul>
            </div>

        </section>
    )

}

export default History;