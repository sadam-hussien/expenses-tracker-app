import React from "react";

import {IconInfo} from "../../../svg/SvgIcons";

import "./HeaderFooter.scss";

const HeaderFooter = () => {

    const iconStyle = {
        width: "1.1rem"
    }

    return (
        <div className="header-footer text-uppercase d-none d-md-block">
            <a href="http://profile-v1.surge.sh" className="text-capitalize d-flex align-items-center" target="_blank" rel="noreferrer">
                <IconInfo style={iconStyle} />
                <span className="text">about me</span>
            </a>
        </div>
    )

}

export default HeaderFooter;