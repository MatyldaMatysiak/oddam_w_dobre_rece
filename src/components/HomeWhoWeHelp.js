import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Foundations from "./Foundations";
import Organisations from "./Organisations";
import separator from "../assets/Decoration.svg"
import LocalCollections from "./LocalCollections";

const organisationsTypes = ["Fundacje", "Organizacje ", "Zbiorki"]

export default function HomeWhoWeHelp() {

    const [toggleActive, setToggleActive] = useState("fundacje")

    const handleChangeActive = (e) => {
        console.log(e.target.id)
        setToggleActive(e.target.id);
    }

    return (
        <section className="whoWeHelp" id="whoWeHelp">
            <h2 className="whoWeHelp__title">Komu pomagamy?</h2>
            <img src={separator} alt="separator" className="separator"/>
            <nav className="whoWeHelp__navigation">
                {/*{organisationsTypes.map(type => <Link to={`/${type}`} className="whoWeHelp__link" key={type}>*/}
                {/*    <button id={type} className={`whoWeHelp__button btn ${toggleActive === type ? "btn-active" : ""}`} onClick={handleChangeActive}>{type}</button>*/}
                {/*</Link>)}*/}
                <Link to="/" className="whoWeHelp__link" >
                    <button id="fundacje" className={`whoWeHelp__button btn ${toggleActive === "fundacje" ? "btn-active" : ""}`} onClick={handleChangeActive}>Fundacje</button>
                </Link>
                <Link to="/organizacje" className="whoWeHelp__link">
                    <button id="organizacje" className={`whoWeHelp__button btn ${toggleActive === "organizacje" ? "btn-active" : ""}`} onClick={handleChangeActive}>Organizacjom<br/>pozarządowym</button>
                </Link>
                <Link to="/zbiorki" className="whoWeHelp__link">
                    <button id="zbiorki" className={`whoWeHelp__button btn ${toggleActive === "zbiorki" ? "btn-active" : ""}`} onClick={handleChangeActive}>Lokalnym<br/>zbiórkom</button>
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