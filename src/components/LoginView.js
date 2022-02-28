import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Navigation from "./Navigation";
import separator from "../assets/Decoration.svg"
import {HashLink} from "react-router-hash-link";
import {auth} from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth"

export default function LoginView({ setUserData }) {
    let navigate = useNavigate();
    const [loader, setLoader] = useState("loading")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendOrNot = [];

        if (email.length === 0 || email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
            sendOrNot.push("invalidEmail")
        }

        if (password.length < 6) {
            sendOrNot.push("invalidPassword")
        }

        setValidation([...sendOrNot])

        if (sendOrNot.length === 0) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    setUserData(prev => {
                        return {
                            ...prev,
                            email: user.email
                        }
                    });
                    navigate("/")
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
    }

    return (
        <section className="login">
            <div className="shadow__container">
                <div className="loginRegister__navBox">
                    <LoginRegister/>
                    <Navigation/>
                </div>
            </div>
            <form className="loginRegister__form" onSubmit={handleSubmit}>
                <h2 className="form__title">Zaloguj się</h2>
                <img src={separator} alt="separator" className="separator" onLoad={() => setLoader('loaded')}/>
                {loader === 'loaded' ? <>
                    <div className="form__inputs">
                        <div className="inputs__email inputs">
                            <label htmlFor="email" className="email-label">Email</label>
                            <input type="text" id="email" name="email" className={`${validation.includes('invalidEmail') ? 'invalid' : 'valid'}`} onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <p className={`${validation.includes('invalidEmail') ? 'visible' : ''} error-message`}>Podany email jest nieprawidłowy!</p>
                        </div>
                        <div className="inputs__password inputs">
                            <label htmlFor="password" className="password-label">Hasło</label>
                            <input type="password" id="password" name="password" className={`${validation.includes('invalidPassword') ? 'invalid' : 'valid'}`} onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <p className={`${validation.includes('invalidPassword') ? 'visible' : ''} error-message`}>Podane hasło jest za krótkie!</p>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <HashLink to="/rejestracja"><button className="btn" type="button">Załóż konto</button></HashLink>
                        <button className="btn btn-active" type="submit">Zaloguj się</button>
                    </div>
                </> : <></>}
            </form>
        </section>
    )
}