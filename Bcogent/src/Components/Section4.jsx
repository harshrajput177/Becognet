import React from "react";
import "../CSS/Section4.css";
import img1 from "../assets/Vector.png";

const Section4 = () => {
  return (
    <section className="future-section">
      <h2 className="future-title">
        Let’s Build Your <br />
        <span>Future & Tech Projects</span>
      </h2>

      <div className="cards-wrapper">

        <div className="future-card left-card">

        <img className="card-icon" src={img1} alt="" />
          <p className="card-text">
            Digital Transformation and Automation <br />
            Android and IOS Apps Designing, Android <br />
            and IOS Apps Designing.
          </p>

          <h3>
            Our <br /> Vision
          </h3>
        </div>

        <div className="future-card right-card">
         <img className="card-icon" src={img1} alt="" />

          <p className="card-text">
            Digital Transformation and Automation <br />
            Android and IOS Apps Designing, Android <br />
            and IOS Apps Designing.
          </p>

          <h3>
            Our <br /> Mission
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Section4;