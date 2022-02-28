import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function LoginRegister() {

    const [toggleMenu, setToggleMenu] = useState(true)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleCloseMenu = () => {
        setToggleMenu(true)
    }
    return (
        <>
            <button className="btn btn-active btn-yellow menu-toggle" onClick={handleToggleMenu}>Profil</button>
            <div className={`loginRegisterBox ${toggleMenu ? "" : "active"}`} onClick={handleCloseMenu}>
                <Link to="/logowanie">
                    <button className="btn">Zaloguj</button>
                </Link>
                <Link to="/rejestracja">
                    <button className="btn btn-active btn-yellow register">Załóż konto</button>
                </Link>
            </div>
        </>
    )
}