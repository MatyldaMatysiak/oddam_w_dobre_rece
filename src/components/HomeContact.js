import React from "react";
import separator from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import bg from "../assets/Background-Contact-Form.jpg";

export default function HomeContact() {
    return (
        <section className="contact" id="contact" style={{ backgroundImage: `linear-gradient(#FFFFFFC9, #FFFFFFC9), url(${bg})` }}>
            <form action="" className="contact__form">
                <h2 className="form__title">Skontaktuj się z nami</h2>
                <img src={separator} alt="separator" className="separator"/>
                <div className="form__personalData">
                    <div className="personalData__name personalData">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input type="text" name="name" id="name" placeholder="Krzysztof"/>
                    </div>
                    <div className="personalData__email personalData">
                        <label htmlFor="email">Wpisz swój email</label>
                        <input type="text" name="email" id="name" placeholder="abc@xyz.pl"/>
                    </div>
                </div>
                <div className="form__message">
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea name="message" id="message" rows="4"
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"></textarea>
                </div>
                <button type="submit" className="btn btn-active form__button">Wyślij</button>
            </form>
            <footer className="contact__footer">
                <div className="footer__copyrightContainer">
                    <p className="footer__copyright">Copyright by Coders Lab</p>
                </div>
                <div className="footer__socialMedia">
                    <img src={facebook} alt="facebook" className="socialMedia__icon"/>
                    <img src={instagram} alt="instagram" className="socialMedia__icon"/>
                </div>
            </footer>
        </section>
    )
}