import React, {useState} from "react";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import {HashLink} from "react-router-hash-link";

export default function SignUpView() {
    const [loader, setLoader] = useState("loading")

    return (
        <section className="Register">
            <div className="loginRegister__navBox">
                <LoginRegister/>
                <Navigation/>
            </div>
            <form className="loginRegister__form">
                <h2 className="form__title">Załóż konto</h2>
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
                        <div className="inputs__passwordRepeat inputs">
                            <label htmlFor="passwordRepeat" className="password-label">Powtórz hasło</label>
                            <input type="text" id="passwordRepeat" name="passwordRepeat"/>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <HashLink to="/logowanie"><button className="btn">Zaloguj się</button></HashLink>
                        <button className="btn btn-active">Załóż konto</button>
                    </div>
                </> : <></>}


            </form>

        </section>
    )
}