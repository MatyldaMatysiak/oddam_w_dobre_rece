import React from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import {Link} from "react-router-dom";
import heroImage from "../assets/HeroImage@2x.png"
import LoggedUserUpperNav from "./LoggedUserUpperNav";
import {HashLink} from "react-router-hash-link";

export default function HomeHeader({ userData, setUserData }) {
    console.log(userData.email)
    return (
        <header className="headerContainer" id="header">
            <div className="shadow__container">
                <div className="navBox">
                    {userData.email === "" ? <LoginRegister/> : <LoggedUserUpperNav userEmail={userData.email} setUserData={setUserData}/>}
                    <Navigation/>
                </div>
            </div>

            <div className="heroContainer" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="header__info">
                    <h2 className="welcome-text">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className="separator" src={separator} alt="separator"/>
                    <div className="buttonsBox">
                        {userData.email === "" ? <Link to="/logowanie">
                            <button className="btn btn-active btn-big">ODDAJ RZECZY</button>
                        </Link> : <HashLink to="/oddaj-rzeczy/krok-1#top">
                            <button className="btn btn-active btn-big">ODDAJ RZECZY</button>
                        </HashLink>}
                        {userData.email === "" ? <Link to="/logowanie">
                            <button className="btn btn-active btn-big">ZORGANIZUJ ZBIÓRKĘ</button>
                        </Link> : <Link to="/">
                            <button className="btn btn-active btn-big">ZORGANIZUJ ZBIÓRKĘ</button>
                        </Link>}
                    </div>
                </div>
            </div>


        </header>
    )
}