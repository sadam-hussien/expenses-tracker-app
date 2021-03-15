import React from "react";

// logo icon
import {IconLogo} from "../../../svg/SvgIcons";

// css file
import "./HeaderLogo.scss";

const HeaderLogo = () => {

    const iconStyle = {
        width: "1.8rem",
    }

    return (
        <div className="header-logo d-none d-md-block">

            {/* start logo  */}
            <div className="logo d-flex align-items-center">
                <IconLogo style={iconStyle} />
                <h6 className="text text-capitalize m-0">expenses tracker</h6>
            </div>
            {/* ******* ebd logo  */}

        </div>
    )

}

export default HeaderLogo;