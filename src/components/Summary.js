import React from "react";
import iconShirt from "../assets/Icon-1.svg";
import iconCourier from "../assets/Icon-4.svg"
import {Link} from "react-router-dom";

export default function Summary({bg, stepOne, stepTwo, stepThree, stepFour}) {
    return (
        <>
            <main className="giveAwayFormBg summary" style={{backgroundImage: `url(${bg})`}}>
                <h2 className="summary__title">Podsumowanie Twojej darowizny</h2>
                <div className="summary__giveAway">
                    <h3 className="giveAway__title">Oddajesz:</h3>
                    <div className="giveAway__details">
                        <img src={iconShirt} alt="shirt icon" className="Icon"/>
                        <p className="details__description">
                            {stepTwo}, {stepOne}, {stepThree.whoHelp.join(", ")}
                        </p>
                        <img src={iconCourier} alt="arrows icon" className="Icon"/>
                        <p className="details__description">
                            dla lokalizacji: {stepThree.location}
                        </p>
                    </div>
                </div>

                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-3">
                        <button className="btn btn-active btn-form" >Wstecz</button>
                    </Link>
                    <Link to="/oddaj-rzeczy/podsumowanie">
                        <button className="btn btn-active btn-form" >Potwierdzam</button>
                    </Link>
                </div>
            </main>
        </>
    )
}