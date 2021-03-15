import React from "react";

import "./SubHeader.scss";

const SubHeader = ({title}) => {

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    const date = new Date();

    const currentMonth = monthNames[date.getMonth()];

    const currentYear = date.getFullYear();

    return (
        
        <div className="hello d-flex align-items-center justify-content-between">
            <h3 className="text text-capitalize m-0">{title}</h3>
            <span className="date">{currentMonth + "  " + currentYear}</span>
        </div>
    )

}

export default SubHeader;