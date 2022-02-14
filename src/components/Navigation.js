import React from "react";
import {Link} from "react-scroll";

export default function Navigation() {
    return (
        <nav className="mainNav">
            <Link to="#">
                <button className="btn btn-active">Start</button>
            </Link>
            <Link to="#">
                <button className="btn">O co chodzi?</button>
            </Link>
            <Link to="#">
                <button className="btn">O nas</button>
            </Link>
            <Link to="#">
                <button className="btn">Fundacja i organizacje</button>
            </Link>
            <Link to="#">
                <button className="btn">Kontakt</button>
            </Link>
        </nav>
    )
}