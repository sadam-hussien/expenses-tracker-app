import React from "react";

// balance
import Balance from "../../components/home/balance/Balance";

// history
import History from "../../components/home/history/History";

import "./Home.scss";

const Home = () => {

    return (
        <section className="page home-page">
            <div className="container">
                
                {/* start balance  */}
                <Balance />
                {/* ******* end balamce  */}

                {/* start history  */}
                <History />
                {/* ***** end history  */}

            </div>
        </section>
    )

}

export default Home;