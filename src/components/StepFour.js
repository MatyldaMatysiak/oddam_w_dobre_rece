import React, {useState} from "react";
import StepsHeader from "./StepsHeader";
import {Link} from "react-router-dom";

export default function StepFour({bg, stepFour, setStepFour}) {

    const [description] = useState("Podaj adres oraz termin odbioru rzeczy.")
    const [form, setForm] = useState({
        street: stepFour.street,
        city: stepFour.city,
        postalCode: stepFour.postalCode,
        phoneNumber: stepFour.phoneNumber,
        day: stepFour.day,
        hour: stepFour.hour,
        comments: stepFour.comments
    })

    const [validation, setValidation] = useState({
        street: true,
        city: true,
        postalCode: true,
        phoneNumber: true,
        day: true,
        hour: true,
    })

    const handleUpdateForm = (e) => {
        let target = e.target
        setForm(prev => {
            return {
                ...prev,
                [target.id]: target.value
            }
        })

        if (target.id === "street") {
            if (target.value.length >= 2) {
                setValidation(prev => {
                    return {
                        ...prev,
                        street: true
                    }
                })
            }
        }

        if (target.id === "city") {
            if (target.value.length >= 2) {
                setValidation(prev => {
                    return {
                        ...prev,
                        city: true
                    }
                })
            }
        }

        if (target.id === "postalCode") {
            if (target.value.match(/[0-9]{2}-[0-9]{3}/)) {
                setValidation(prev => {
                    return {
                        ...prev,
                        postalCode: true
                    }
                })
            }
        }

        if (target.id === "phoneNumber") {
            if (target.value.length === 9) {
                setValidation(prev => {
                    return {
                        ...prev,
                        phoneNumber: true
                    }
                })
            }
        }

        if (target.id === "day") {
            if (target.value.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)) {
                setValidation(prev => {
                    return {
                        ...prev,
                        day: true
                    }
                })
            }
        }

        if (target.id === "hour") {
            if (target.value.match(/[0-2][0-9]:[0-5][0-9]/)) {
                setValidation(prev => {
                    return {
                        ...prev,
                        hour: true
                    }
                })
            }
        }
    }

    const handleSaveForm = () => setStepFour(form)

    const handleValidation = (e) => {
        if (form.street.length < 2) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    street: false
                }
            })
        }
        if (form.city.length < 2) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    city: false
                }
            })
        }
        if (form.postalCode.match(/[0-9]{2}-[0-9]{3}/) === null) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    postalCode: false
                }
            })
        }
        if (form.phoneNumber.length !== 9) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    phoneNumber: false
                }
            })
        }
        if (form.day.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) === null) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    day: false
                }
            })
        }
        if (form.hour.match(/[0-2][0-9]:[0-5][0-9]/) === null) {
            e.preventDefault();
            setValidation(prev => {
                return {
                    ...prev,
                    hour: false
                }
            })
        }
    }


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
                                <input type="text" id="street" name="street" className={`verse__input ${validation.street ? "" : "invalid"}`} value={form.street} onChange={handleUpdateForm}/>
                            </div>
                            <p className={`stepFour__validationText ${validation.street ? "" : "visible"}`}>Nazwa ulicy musi mieć conajmniej 2 znaki!</p>

                            <div className="address__verse">
                                <label htmlFor="city" className="verse__title">Miasto</label>
                                <input type="text" id="city" name="city" className={`verse__input ${validation.city ? "" : "invalid"}`} value={form.city} onChange={handleUpdateForm}/>
                            </div>
                            <p className={`stepFour__validationText ${validation.city ? "" : "visible"}`}>Nazwa miasta musi mieć conajmniej 2 znaki!</p>
                            <div className="address__verse">
                                <label htmlFor="postalCode" className="verse__title">Kod pocztowy</label>
                                <input type="text" id="postalCode" name="postalCode" className={`verse__input ${validation.postalCode ? "" : "invalid"}`} value={form.postalCode} onChange={handleUpdateForm}/>
                            </div>
                            <p className={`stepFour__validationText ${validation.postalCode ? "" : "visible"}`}>Kod pocztowy musi mieć poprawny format np. 12-345!</p>
                            <div className="address__verse">
                                <label htmlFor="phoneNumber" className="verse__title">Numer telefonu</label>
                                <input type="number" id="phoneNumber" name="phoneNumber" className={`verse__input ${validation.phoneNumber ? "" : "invalid"}`} value={form.phoneNumber} onChange={handleUpdateForm}/>
                            </div>
                            <p className={`stepFour__validationText ${validation.phoneNumber ? "" : "visible"}`}>Poprawny nr telefonu musi mieć 9 znaków!</p>
                        </div>
                        <div className="data__date">
                            <h3 className="date__title">Termin odbioru:</h3>
                            <div className="date__verse">
                                <label htmlFor="day" className="verse__title">Data</label>
                                <input type="date" id="day" name="day" className={`verse__input ${validation.day ? "" : "invalid"}`} value={form.day} onChange={handleUpdateForm}/>
                            </div>
                            <p className={`stepFour__validationText ${validation.day ? "" : "visible"}`}>Wybierz poprawną datę!</p>
                            <div className="date__verse">
                                <label htmlFor="hour" className="verse__title">Godzina</label>
                                <input type="text" id="hour" name="hour" className={`verse__input ${validation.hour ? "" : "invalid"}`} value={form.hour} onChange={handleUpdateForm}/>
                            </div>
                            <p className={`stepFour__validationText ${validation.hour ? "" : "visible"}`}>Wpisz godzinę w poprawnym formacie np. 13:00!</p>
                            <div className="date__verse">
                                <label htmlFor="comments" className="verse__title">Uwagi dla kuriera</label>
                                <textarea id="comments" name="comments" className="verse__input" rows="4" value={form.comments} onChange={handleUpdateForm}/></div>
                        </div>
                    </div>

                </form>
                <div className="buttonBox">
                    <Link to="/oddaj-rzeczy/krok-3">
                        <button className="btn btn-active btn-form" onClick={handleSaveForm}>Wstecz</button>
                    </Link>
                    <Link to="/oddaj-rzeczy/podsumowanie" onClick={handleValidation}>
                        <button className="btn btn-active btn-form" onClick={handleSaveForm}>Dalej</button>
                    </Link>
                </div>
            </main>
        </>
    )
}