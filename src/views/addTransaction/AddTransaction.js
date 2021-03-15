import React from "react";

import Add from "../../components/addTransaction/Add";

import "./AddTransaction.scss";

const AddTransaction = () => {

    return (
        <section className="page addtransaction-page">
            <div className="container">
                
                {/* add  */}
                <Add />

            </div>
        </section>
    )

}

export default AddTransaction;