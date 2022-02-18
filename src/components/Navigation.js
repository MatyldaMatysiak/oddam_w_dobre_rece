import React from "react";
import {Link} from "react-scroll";
import {HashLink} from "react-router-hash-link";

export default function Navigation() {
    return (
        <nav className="mainNav">
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
    )
}