import React from "react";

import {NavLink} from "react-router-dom";

// icons
import {IconHome, IconAnalytics, IconAdd, IconTest} from "../../../svg/SvgIcons";

import "./HeaderNav.scss";

const HeaderNav = () => {

    const iconStyle = {
        width: "1.4rem"
    }

    return (
        <nav className="header-nav">
            <ul className="list-unstyled m-0 p-0 d-flex flex-row flex-md-column justify-content-center align-items-center align-items-md-stretch">
                <li>
                    <NavLink to="/" exact>
                        <IconHome style={iconStyle} />
                        <span className="text text-capitalize">home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics">
                        <IconAnalytics style={iconStyle} />
                        <span className="text text-capitalize">analytics</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addtransaction">
                        <IconAdd style={iconStyle} />
                        <span className="text text-capitalize">add transaction</span>
                    </NavLink>
                </li>
                <li className="d-none d-sm-block">
                    <NavLink to="/test2">
                        <IconTest style={iconStyle} />
                        <span className="text text-capitalize">testing</span>
                    </NavLink>
                </li>
                <li className="d-none d-sm-block">
                    <NavLink to="/test1">
                        <IconTest style={iconStyle} />
                        <span className="text text-capitalize">testing</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default HeaderNav;