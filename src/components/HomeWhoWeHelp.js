import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Foundations from "./Foundations";
import Organisations from "./Organisations";
import separator from "../assets/Decoration.svg"

export default function HomeWhoWeHelp() {
    return (
        <section className="whoWeHelp" id="whoWeHelp">
            <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
            <img src={separator} alt="separator" className="separator"/>
            <nav className="whoWeHelp__navigation">
                <Link to="/fundacje" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn btn-active">Fundacjom</button>
                </Link>
                <Link to="/organizacje" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn">Organizacjom<br/>pozarządowym</button>
                </Link>
                <Link to="/" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn">Lokalnym<br/>zbiórkom</button>
                </Link>
            </nav>
            <p className="whoWeHelp__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Routes>
                <Route path="/fundacje" element={ <Foundations/> } />
                <Route path="/organizacje" element={ <Organisations/> } />
            </Routes>
        </section>
    )
}