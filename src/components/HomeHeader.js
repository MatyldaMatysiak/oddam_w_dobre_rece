import React from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import {Link} from "react-router-dom";
import heroImage from "../assets/HeroImage@2x.png"
import LoggedUserUpperNav from "./LoggedUserUpperNav";

export default function HomeHeader({ userData, setUserData }) {
    console.log(userData.email)
    return (
        <header className="headerContainer">
            <div className="navBox">
                {userData.email === "" ? <LoginRegister/> : <LoggedUserUpperNav userEmail={userData.email} setUserData={setUserData}/>}
                <Navigation/>
            </div>
            <div className="heroContainer" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="header__info">
                    <h2 className="welcome-text">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className="separator" src={separator} alt="separator"/>
                    {userData.email === "" ? <Link to="/logowanie">
                        <button className="btn btn-active btn-big">ODDAJ<br/>RZECZY</button>
                    </Link> : <Link to="/oddaj-rzeczy/krok-1">
                        <button className="btn btn-active btn-big">ODDAJ<br/>RZECZY</button>
                    </Link>}
                    {userData.email === "" ? <Link to="/logowanie">
                            <button className="btn btn-active btn-big">ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                        </Link> : <Link to="/">
                        <button className="btn btn-active btn-big">ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                    </Link>}

                </div>
            </div>


        </header>
    )
}