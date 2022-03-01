import React from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import heroImage from "../assets/Form-Hero-Image.jpg"
import {Link} from "react-router-dom";
import LoggedUserUpperNav from "./LoggedUserUpperNav";

export default function GiveAwayHeader({ userData, setUserData, startNotActive }) {
    return (
        <header className="headerContainer giveAwayHeader">
            <div className="shadow__container">
                <div className="navBox">
                    <LoggedUserUpperNav userEmail={userData.email} setUserData={setUserData}/>
                    <Navigation startNotActive={startNotActive}/>
                </div>
            </div>

            <div className="heroContainer" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="header__info">
                    <h2 className="welcome-text">Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h2>
                    <img className="separator" src={separator} alt="separator"/>
                    <h3 className="fourSimpleStep__title">Wystarczą 4 proste kroki:</h3>
                    <div className="fourSimpleStep__container">
                        <div className="step__square">
                            <h4 className="step__number">1</h4>
                            <p className="step__text">Wybierz<br/>rzeczy</p>
                            <div className="step__rotate">

                            </div>
                        </div>
                        <div className="step__square">
                            <h4 className="step__number">2</h4>
                            <p className="step__text">Spakuj je<br/>w worki</p>
                            <div className="step__rotate">

                            </div>
                        </div>
                        <div className="step__square">
                            <h4 className="step__number">3</h4>
                            <p className="step__text">Wybierz<br/>fundację</p>
                            <div className="step__rotate">

                            </div>
                        </div>
                        <div className="step__square">
                            <h4 className="step__number">4</h4>
                            <p className="step__text">Zamów<br/>kuriera</p>
                            <div className="step__rotate">

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}