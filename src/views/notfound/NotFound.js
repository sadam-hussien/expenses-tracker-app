import React from "react";

import {Link} from "react-router-dom";

import NotfImg from "../../assets/notfound.gif";

import "./NotFound.scss";

const NotFound = () => {

    return (
        <section className="not-found d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">

                        <div className="not-found-content text-center">
                            <div className="img">
                                <img src={NotfImg} alt="not found" className="img-fluid" />
                            </div>
                            <h1 className="missing-text">
                                something missing...
                            </h1>
                            <h3 className="info-text">the page you looking for is not found</h3>
                            <Link to="/">go to home</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );

}

export default NotFound;