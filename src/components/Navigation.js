import React, {useState} from "react";
import {Link} from "react-scroll";
import {HashLink} from "react-router-hash-link";

export default function Navigation({ startNotActive }) {

    const [toggleMenu, setToggleMenu] = useState(true)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleCloseMenu = () => {
        setToggleMenu(true)
    }

    return (
        <>
            <button className="btn btn-active menu-toggle" onClick={handleToggleMenu}>Menu</button>
            <nav className={`mainNav ${toggleMenu ? "" : "active"}`}>
                <HashLink to="/" onClick={handleCloseMenu}>
                    <button className={`btn ${startNotActive ? "" : "btn-active"}`} onBlur={handleCloseMenu}>Start</button>
                </HashLink>
                <HashLink to="/#simpleSteps" duration={500}>
                    <button className="btn" onBlur={handleCloseMenu}>O co chodzi?</button>
                </HashLink>
                <HashLink to="/#aboutUs" duration={500}>
                    <button className="btn" onBlur={handleCloseMenu}>O nas</button>
                </HashLink>
                <HashLink to="/#whoWeHelp" duration={500}>
                    <button className="btn" onBlur={handleCloseMenu}>Fundacja i organizacje</button>
                </HashLink>
                <HashLink to="/#contact" duration={500}>
                    <button className="btn" onBlur={handleCloseMenu}>Kontakt</button>
                </HashLink>
            </nav>
        </>
    )
}