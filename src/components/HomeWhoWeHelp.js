import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Foundations from "./Foundations";
import Organisations from "./Organisations";
import separator from "../assets/Decoration.svg"
import LocalCollections from "./LocalCollections";

export default function HomeWhoWeHelp() {

    const handleChangeActive = (e) => {
        const pageButtons = document.querySelectorAll(".whoWeHelp__navigation .btn")
        pageButtons.forEach(button => button.classList.remove("btn-active"))
        const activeButton = e.target
        activeButton.classList.add("btn-active");
    }

    return (
        <section className="whoWeHelp" id="whoWeHelp">
            <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
            <img src={separator} alt="separator" className="separator"/>
            <nav className="whoWeHelp__navigation">
                <Link to="/" className="whoWeHelp__link" >
                    <button className="whoWeHelp__button btn btn-active" onClick={handleChangeActive}>Fundacjom</button>
                </Link>
                <Link to="/organizacje" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn" onClick={handleChangeActive}>Organizacjom<br/>pozarządowym</button>
                </Link>
                <Link to="/zbiorki" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn" onClick={handleChangeActive}>Lokalnym<br/>zbiórkom</button>
                </Link>
            </nav>
            <p className="whoWeHelp__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Routes>
                <Route path="/" element={ <Foundations/> } />
                <Route path="/organizacje" element={ <Organisations/> } />
                <Route path="/zbiorki" element={ <LocalCollections/> } />
            </Routes>
        </section>
    )
}