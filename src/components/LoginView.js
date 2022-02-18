import React, {useState} from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import {HashLink} from "react-router-hash-link";

export default function LoginView() {
    const [loader, setLoader] = useState("loading")

    return (
        <section className="login">
            <div className="loginRegister__navBox">
                <LoginRegister/>
                <Navigation/>
            </div>
            <form className="loginRegister__form">
                <h2 className="form__title">Zaloguj się</h2>
                <img src={separator} alt="separator" className="separator" onLoad={() => setLoader('loaded')}/>
                {loader === 'loaded' ? <>
                    <div className="form__inputs">
                        <div className="inputs__email inputs">
                            <label htmlFor="email" className="email-label">Email</label>
                            <input type="text" id="email" name="email"/>
                        </div>
                        <div className="inputs__password inputs">
                            <label htmlFor="password" className="password-label">Hasło</label>
                            <input type="text" id="password" name="password"/>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <HashLink to="/rejestracja"><button className="btn">Załóż konto</button></HashLink>
                        <button className="btn btn-active">Zaloguj się</button>
                    </div>
                </> : <></>}
            </form>
        </section>
    )
}