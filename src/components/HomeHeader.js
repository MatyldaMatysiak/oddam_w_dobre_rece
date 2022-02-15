import React from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import {Link} from "react-router-dom";
import heroImage from "../assets/HeroImage@2x.png"

export default function HomeHeader() {
    return (
        <header className="headerContainer">
            <div className="navBox">
                <LoginRegister/>
                <Navigation/>
            </div>
            <div className="heroContainer" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="header__info">
                    <h2 className="welcome-text">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className="separator" src={separator} alt="separator"/>
                    <Link to="/logowanie">
                        <button className="btn btn-active btn-big">ODDAJ<br/>RZECZY</button>
                    </Link>
                    <Link to="/logowanie">
                        <button className="btn btn-active btn-big">ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                    </Link>
                </div>
            </div>


        </header>
    )
}