import React from "react";
import separator from "../assets/Decoration.svg"

export default function Thanks({bg}) {

    return (
        <>
            <main className="giveAwayFormBg thanks step" style={{backgroundImage: `url(${bg})`}}>
                <div className="thanks__container">
                    <h2 className="thanks__title">Dziękujemy za przesłanie formularza.<br/>Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                    <img src={separator} alt="separator" className="separator"/>
                </div>
            </main>
        </>
    )
}