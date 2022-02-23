import React from "react";
import iconShirt from "../assets/Icon-1.svg";
import iconCourier from "../assets/Icon-4.svg"
import {Link} from "react-router-dom";

export default function Summary({bg, stepOne, stepTwo, stepThree, stepFour, sendForm}) {

    const handleSendForm = () => {
        sendForm();
    }

    return (
        <>
            <main className="giveAwayFormBg summary step" style={{backgroundImage: `url(${bg})`}}>
                <div className="summary__container">
                    <h2 className="summary__title">Podsumowanie Twojej darowizny</h2>
                    <div className="summary__giveAway">
                        <h3 className="giveAway__title">Oddajesz:</h3>
                        <div className="giveAway__details">
                            <div className="details__verse">
                                <img src={iconShirt} alt="shirt icon" className="Icon"/>
                                <p className="details__description">
                                    {stepTwo} worki, {stepOne} ({stepThree.whoHelp.join(", ")})
                                </p>
                            </div>
                            <div className="details__verse">
                                <img src={iconCourier} alt="arrows icon" className="Icon"/>
                                <p className="details__description">
                                    dla lokalizacji: {stepThree.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="summary__pickUp">
                        <div className="pickUp__address">
                            <h3 className="address__title">Adres odbioru:</h3>
                            <div className="address__details">
                                <p className="details__name">Ulica</p>
                                <p className="details__content">{stepFour.street}</p>
                            </div>
                            <div className="address__details">
                                <p className="details__name">Miasto</p>
                                <p className="details__content">{stepFour.city}</p>
                            </div>
                            <div className="address__details">
                                <p className="details__name">Kod<br/>pocztowy</p>
                                <p className="details__content">{stepFour.postalCode}</p>
                            </div>
                            <div className="address__details">
                                <p className="details__name">Numer<br/>telefonu</p>
                                <p className="details__content">{stepFour.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="pickUp__date">
                            <h3 className="date__title">Termin odbioru:</h3>
                            <div className="date__details">
                                <p className="details__name">Data</p>
                                <p className="details__content">{stepFour.day}</p>
                            </div>
                            <div className="address__details">
                                <p className="details__name">Godzina</p>
                                <p className="details__content">{stepFour.hour}</p>
                            </div>
                            <div className="address__details">
                                <p className="details__name">Uwagi<br/>dla kuriera</p>
                                <p className="details__content">{stepFour.comments}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-4">
                        <button className="btn btn-active btn-form" >Wstecz</button>
                    </Link>
                    <Link to="/oddaj-rzeczy/podziekowanie">
                        <button className="btn btn-active btn-form" onClick={handleSendForm}>Potwierdzam</button>
                    </Link>
                </div>
            </main>
        </>
    )
}