import React, { useState, useContext } from "react";

// alerts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {GlobalContext} from "../../context/GlobalContext";

import SubHeader from "../global/subheader/SubHeader";

import {IconMoney} from "../svg/SvgIcons";

import "./Add.scss";

const Add = () => {

    // state
    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState(0);

    const date = new Date();

    const day = date.getDate();

    const month = date.getMonth() + 1;

    const year = date.getFullYear();

    const fullDate = month + "/" + day + "/" + year;

    // const date = new Date().toLocaleString();

    const {addTransaction} = useContext(GlobalContext);

    const notify = () => toast.success("Added Succefully !");

    const handleSubmit = (e) => {

        e.preventDefault();

        const item = {
            id: Math.floor(Math.random() * 1000),
            title,
            amount,
            date: fullDate
        };

        addTransaction(item);

        setTitle("");

        setAmount(0);

        notify();

    }

    return (
        <section className="add-transaction">

            <SubHeader title="add transaction" />

            <ToastContainer position="top-center" />

            <div className="add-transaction-content">
                <div className="row">
                    <div className="col-md-6 align-items-center d-flex">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="transaction-title" className="text-capitalize">transaction title</label>
                                <input 
                                    type="text"
                                    id="transaction-title"
                                    required 
                                    className="form-control" 
                                    placeholder="e.g: fly to paris..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="transaction-amount" className="text-capitalize">transaction amount</label>
                                <span className="amount-note">(negative: expense, positive: income)</span>
                                <input 
                                    type="number" 
                                    id="transaction-amount" 
                                    required className="form-control" 
                                    placeholder="e.g: 50000"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} />
                            </div>

                            <div className="add-transaction-submit">
                                <button type="submit"  className="text-capitalize">add transaction</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="outer-icon">
                            <IconMoney style={{maxWidth: "90%", fill: "#116CD5"}} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Add;