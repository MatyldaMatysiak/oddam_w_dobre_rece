import React, {useState} from "react";
import StepsHeader from "./StepsHeader";
import {Link} from "react-router-dom";

export default function StepFour({bg}) {

    const [description] = useState("Podaj adres oraz termin odbioru rzeczy.")

    return (
        <>
            <StepsHeader description={description}/>
            <main className="giveAwayFormBg step" style={{backgroundImage: `url(${bg})`}}>
                <form className="stepFour__form">
                    <p className="stepNumber">4/4</p>
                    <h2 className="form__title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                    <div className="form__data">
                        <div className="data__address">
                            <h3 className="address__title">Adres odbioru:</h3>
                            <div className="address__verse">
                                <label htmlFor="street" className="verse__title">Ulica</label>
                                <input type="text" id="street" name="street" className="verse__input"/></div>
                            <div className="address__verse">
                                <label htmlFor="city" className="verse__title">Miasto</label>
                                <input type="text" id="city" name="city" className="verse__input"/></div>
                            <div className="address__verse">
                                <label htmlFor="postalCode" className="verse__title">Kod<br/>pocztowy</label>
                                <input type="text" id="postalCode" name="postalCode" className="verse__input"/></div>
                            <div className="address__verse">
                                <label htmlFor="phoneNumber" className="verse__title">Numer<br/>telefonu</label>
                                <input type="text" id="phoneNumber" name="phoneNumber" className="verse__input"/>
                            </div>
                        </div>
                        <div className="data__date">
                            <h3 className="date__title">Termin odbioru:</h3>
                            <div className="date__verse">
                                <label htmlFor="day" className="verse__title">Data</label>
                                <input type="text" id="day" name="day" className="verse__input"/></div>
                            <div className="date__verse">
                                <label htmlFor="hour" className="verse__title">Godzina</label>
                                <input type="text" id="hour" name="hour" className="verse__input"/></div>
                            <div className="date__verse">
                                <label htmlFor="comments" className="verse__title">Uwagi<br/>dla kuriera</label>
                                <textarea id="comments" name="comments" className="verse__input" rows="4"/></div>
                        </div>
                    </div>

                </form>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-1">
                        <button className="btn btn-active btn-form">Wstecz</button>
                    </Link>
                    <Link to="/oddaj-rzeczy/krok-3">
                        <button className="btn btn-active btn-form">Dalej</button>
                    </Link>
                </div>
            </main>
        </>
    )
}