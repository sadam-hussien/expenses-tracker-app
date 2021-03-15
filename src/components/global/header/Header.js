import React, { useEffect, useRef } from "react";

// header logo
import HeaderLogo from "./logo/HeaderLogo";

// header nav
import HeaderNav from "./nav/HeaderNav";

// header footer
import HeaderFooter from "./footer/HeaderFooter";

import "./Header.scss";

const Header = ({theWidth}) => {

    const headerRef = useRef();

    useEffect(() => {

        theWidth(headerRef.current.offsetWidth);

    }, [theWidth]);

    return (
        <header ref={headerRef} className="main-header d-flex flex-row align-items-center align-items-md-stretch flex-md-column justify-content-center justify-content-md-between">
            
            {/* start header-logo  */}
            <HeaderLogo />
            {/* ****** end header-logo  */}

            {/* start header-nav  */}
            <HeaderNav />
            {/* ****** end header-nav  */}

            {/* start header-footer  */}
            <HeaderFooter />
            {/* ****** header-footer  */}

        </header>
    );

}

export default Header;