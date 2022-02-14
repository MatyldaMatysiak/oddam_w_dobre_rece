import React from "react";
import {Link} from "react-router-dom";

export default function LoginRegister() {
    return (
        <div className="loginRegisterBox">
            <Link to="/logowanie">
                <button className="btn">Zaloguj</button>
            </Link>
            <Link to="/rejestracja">
                <button className="btn btn-active btn-yellow">Załóż konto</button>
            </Link>
        </div>
    )
}