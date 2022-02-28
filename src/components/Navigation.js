import React, {useState} from "react";
import {Link} from "react-scroll";
import {HashLink} from "react-router-hash-link";

export default function Navigation() {

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
            <nav className={`mainNav ${toggleMenu ? "" : "active"}`} onClick={handleCloseMenu}>
                <HashLink to="/">
                    <button className="btn btn-active">Start</button>
                </HashLink>
                <HashLink to="/#simpleSteps" duration={500}>
                    <button className="btn">O co chodzi?</button>
                </HashLink>
                <HashLink to="/#aboutUs" duration={500}>
                    <button className="btn">O nas</button>
                </HashLink>
                <HashLink to="/#whoWeHelp" duration={500}>
                    <button className="btn">Fundacja i organizacje</button>
                </HashLink>
                <HashLink to="/#contact" duration={500}>
                    <button className="btn">Kontakt</button>
                </HashLink>
            </nav>
        </>
    )
}