import React, {useState} from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg";
import {HashLink} from "react-router-hash-link";

export default function Logout() {
    const [loader, setLoader] = useState("loading")

    return (
        <section className="logout">
            <div className="shadow__container">
                <div className="loginRegister__navBox">
                    <LoginRegister/>
                    <Navigation/>
                </div>
            </div>
            <form className="loginRegister__form">
                <h2 className="form__title">Wylogowanie nastąpiło pomyślnie!</h2>
                <img src={separator} alt="separator" className="separator" onLoad={() => setLoader('loaded')}/>
                {loader === 'loaded' ? <>
                    <div className="logout-button">
                        <HashLink to="/"><button className="btn btn-active">Strona główna</button></HashLink>
                    </div>
                </> : <></>}
            </form>
        </section>
    )
}