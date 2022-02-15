import React from "react";
import separator from "../assets/Decoration.svg"
import {Link} from "react-router-dom";
import TshirtIcon from "../assets/Icon-1.svg";
import BagIcon from "../assets/Icon-2.svg";
import Loupe from "../assets/Icon-3.svg";
import Courier from "../assets/Icon-4.svg";

export default function HomeSimpleSteps() {
    return (
        <section className="simpleSteps" id="simpleSteps">
            <h2 className="simpleSteps__title">Wystarczą 4 proste kroki</h2>
            <img src={separator} alt="separator" className="separator"/>
            <div className="simpleSteps__fourSteps">
                <div className="fourSteps__step">
                    <img src={TshirtIcon} alt="tshirt icon" className="step__icon"/>
                    <h4 className="step__title">Wybierz rzeczy</h4>
                    <p className="step__description">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="fourSteps__step">
                    <img src={BagIcon} alt="bag" className="step__icon"/>
                    <h4 className="step__title">Spakuj je</h4>
                    <p className="step__description">skorzystaj z worków na śmieci</p>
                </div>
                <div className="fourSteps__step">
                    <img src={Loupe} alt="loupe" className="step__icon"/>
                    <h4 className="step__title">Zdecyduj komu chcesz po móc</h4>
                    <p className="step__description">wybierz zaufane miejsce</p>
                </div>
                <div className="fourSteps__step">
                    <img src={Courier} alt="arrows" className="step__icon"/>
                    <h4 className="step__title">Zamów kuriera</h4>
                    <p className="step__description">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to="/logowanie">
                <button className="btn btn-active btn-big">ODDAJ<br/>RZECZY</button>
            </Link>
        </section>
    )
}