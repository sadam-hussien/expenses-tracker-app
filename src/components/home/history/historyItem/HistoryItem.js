import React, {useContext, useEffect, useState} from "react";

// context api
import {GlobalContext} from "../../../../context/GlobalContext";

// alerts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// icon
import {IconTrash, IconWallet} from "../../../svg/SvgIcons";

// css file
import "./HistoryItem.scss";

const HistoryItem = ({theDate}) => {

    const {transactions, deleteTransaction} = useContext(GlobalContext);

    const [filterdTransactions, setFilterdTransactions] = useState([]);

    const notify = () => toast.error("deleted Succefully !");

    // filter transaction (check if the there is item in this day)
    useEffect( () => {

        const filterdTransactions = transactions.filter( item => {

            return new Date(item.date).getDate() === theDate
    
        });

        setFilterdTransactions(filterdTransactions);

    }, [transactions, theDate])

    // using it for write the month name 
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const theTitle = monthNames[new Date().getMonth()];

    const handleDelete = (item) => {

        deleteTransaction(item);

        notify();
        
    }

    return (
        <div className="history-item">

            <ToastContainer position="top-center" />

            <div className="history-item-title">
                <h5 className="text m-0">{theTitle + " " + theDate}</h5>
            </div>

            <ul className="list-unstyled history-item-box">

                {
                    filterdTransactions.length > 0 ? 
                        filterdTransactions.map((item) => {

                            return filterdTransactions.length ? 
                                <li key={item.id} className="d-flex align-items-center justify-content-between">

                                    <div className="single-item-title d-flex align-items-center">
                                        <span style={{borderColor: item.amount > 0 ? "#F09B95" : "#116CD5"}}>
                                            <IconWallet style={{width: ".9rem", fill: item.amount > 0 ? "#F09B95" : "#116CD5" }} />
                                        </span>
                                        <h6 className="text m-0">{item.title}</h6>
                                    </div>

                                    <div className="single-item-details">
                                        <span className={item.amount > 0 ? "amount income-color" : "amount expenses-color"}>{item.amount > 0 ? "+ $" : "- $"} {Math.abs(item.amount)}</span>
                                        <button className="delete" onClick={ () => handleDelete(item.id) }><IconTrash style={{width: "1.2rem", height: "auto"}} /></button>
                                    </div>

                                </li>

                            :   <li className="no-history">
                                    <div className="single-item-title">
                                        <h6 className="text m-0">no items in day</h6>
                                    </div>
                                </li>
        
                        })
                    : <li>no items</li>

                }

            </ul>
        </div>
    )

}

export default HistoryItem;