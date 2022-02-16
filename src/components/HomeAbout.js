import React from "react";
import Separator from "../assets/Decoration.svg";
import aboutFoto from "../assets/People.jpg";
import signature from "../assets/Signature.svg";

export default function HomeAbout() {
    return (
        <section className="aboutUs" id="aboutUs">
            <div className="aboutUs__aboutText about-column">
                <h2 className="aboutText__title">O nas</h2>
                <img src={Separator} alt="separator" className="separator"/>
                <p className="aboutText__description">Nori grape silver beet broccoli kombu beet greens fava bean potato
                    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature" className="aboutText__signature"/>
            </div>
            <div className="aboutUs__aboutImage about-column" style={{ backgroundImage: `url(${aboutFoto})` }}>

            </div>
        </section>
    )
}