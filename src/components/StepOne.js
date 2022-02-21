import React, {useState} from "react";
import StepsHeader from "./StepsHeader";
import {Link} from "react-router-dom";

export default function StepOne({bg}) {

    const [description] = useState("Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.")

    return (
        <>
            <StepsHeader description={description} />
            <main className="giveAwayFormBg step" style={{ backgroundImage: `url(${bg})` }}>
                <form className="stepOne__form">
                    <p className="stepNumber">1/4</p>
                    <h2 className="form__title">Zaznacz co chcesz oddać:</h2>
                    <div className="form__option">
                        <input type="radio" id="ubrania" name="thingsToGive" value="ubrania, które nadają się do ponownego użycia"/>
                        <label  className="form__label" htmlFor="huey">ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div className="form__option">
                        <input type="radio" id="ubrania2" name="thingsToGive" value="ubrania, do wyrzucenia"/>
                        <label className="form__label" htmlFor="ubrania2">ubrania, do wyrzucenia</label>
                    </div>
                    <div className="form__option">
                        <input type="radio" id="zabawki" name="thingsToGive" value="zabawki"/>
                        <label className="form__label" htmlFor="zabawki">zabawki</label>
                    </div>
                    <div className="form__option">
                        <input type="radio" id="książki" name="thingsToGive" value="książki"/>
                        <label className="form__label" htmlFor="książki">książki</label>
                    </div>
                    <div className="form__option">
                        <input type="radio" id="inne" name="thingsToGive" value="inne"/>
                        <label className="form__label" htmlFor="inne">inne</label>
                    </div>
                </form>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-2"><button className="btn btn-active btn-form">Dalej</button></Link>
                </div>
            </main>

        </>
    )
}