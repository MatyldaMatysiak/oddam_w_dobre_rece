import React, {useState} from "react";
import Navigation from "./Navigation";
import LoggedUserUpperNav from "./LoggedUserUpperNav";
import {auth} from "../firebaseConfig";
import { updateProfile } from "firebase/auth";

export default function UserPanel({userData, setUserData, startNotActive}) {

    const [nameInput, setNameInput] = useState(false)
    const [emailInput, setEmailInput] = useState(false)
    const [passwordInput, setPasswordInput] = useState(false)

    const [updatedName, setUpdatedName] = useState("")
    const [updatedEmail, setUpdatedEmail] = useState("")
    const [updatedPassword, setUpdatedPassword] = useState("")
    const [updatedPassword2, setUpdatedPassword2] = useState("")

    const handleEditName = () => {
        setNameInput(true)
    }

    const handleSaveName = () => {
        updateProfile(auth.currentUser, {
            displayName: updatedName
        }).then(() => {
            setNameInput(false)
            setUserData(prev => {
                return {
                    ...prev,
                    name: updatedName,

                }
            })
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const handleEditEmail = () => {

    }

    const handleEditPassword = () => {

    }

    const handleEditPhoto = () => {

    }

    return (
        <section className="userPanel">
            <div className="shadow__container">
                <div className="navBox">
                    <LoggedUserUpperNav userEmail={userData.email} setUserData={setUserData}/>
                    <Navigation startNotActive={startNotActive}/>
                </div>
            </div>
            <div className="userPanel__userProfile">
                <div className="userProfile__image">

                </div>
                <div className="userProfile__data">
                    <div className="data__name data">
                        <div className="textBox">
                            <p className="name__label label">Nazwa użytkownika:</p>
                            {nameInput ? <input type="text" value={updatedName} placeholder={userData.name}
                                                onChange={(e) => setUpdatedName(e.target.value)}/> :
                                <p className="name__input input">{userData.name}</p>}
                        </div>
                        {!nameInput ? <button className="edit btn btn-active"
                                             onClick={handleEditName}>{userData.name === null ? "Dodaj" : "Edytuj"}</button> :
                            <button className="edit btn btn-active"
                                    onClick={handleSaveName}>Zapisz</button>}

                    </div>
                    <div className="data__email data">
                        <div className="textBox">
                            <p className="email__label label">Email:</p>
                            <p className="email__input input">{userData.email}</p>
                        </div>
                        <button className="edit btn btn-active">Edytuj</button>
                    </div>
                    <div className="data__password data">
                        <div className="textBox">
                            <p className="email__label label">Hasło:</p>
                            <p className="email__input input">*******</p>
                        </div>
                        <button className="edit btn btn-active">Edytuj</button>
                    </div>
                </div>
            </div>
        </section>
    )

}