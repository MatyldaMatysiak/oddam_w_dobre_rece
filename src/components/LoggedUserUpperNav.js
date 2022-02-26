import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebaseConfig";
import {signOut} from "firebase/auth"

export default function LoggedUserUpperNav({ userEmail, setUserData }) {

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUserData(prev => {
                    return {
                        ...prev,
                        email: ""
                    }
                })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className="loginRegisterBox loggedUser">
            <Link to="/">
                <button className="btn loggedUser__email">{userEmail}</button>
            </Link>
            <Link to="/oddaj-rzeczy/krok-1">
                <button className="btn btn-active btn-yellow loggedUser__giveAway">Oddaj rzeczy</button>
            </Link>
            <Link to="/wylogowano">
                <button className="btn loggedUser__logOut" onClick={handleSignOut}>Wyloguj</button>
            </Link>
        </div>
    )
}