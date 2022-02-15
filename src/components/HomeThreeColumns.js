import React from "react";
import columnsBackground from "../assets/3ColumnsBackground.png";

export default function HomeThreeColumns() {
    return (
        <section className="threeColumns" style={{ backgroundImage: `url(${columnsBackground})` }}>
            <div className="threeColumns__column">
                <h2 className="column__number">10</h2>
                <h3 className="column__title">ODDANYCH WORKÓW</h3>
                <p className="column__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="threeColumns__column">
                <h2 className="column__number">5</h2>
                <h3 className="column__title">WSPARTYCH ORGANIZACJI</h3>
                <p className="column__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="threeColumns__column">
                <h2 className="column__number">7</h2>
                <h3 className="column__title">ZORGANIZOWANY ZBIÓREK</h3>
                <p className="column__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}