import React from 'react'
import img2 from "../assets/workers-reviewing-shipping-manifest-using-laptop-o-2026-03-24-06-28-05-utc (1) 2.png"
import img1 from "../assets/Mask group (1).png"
import "../CSS/Section3.css";

const Section3 = () => {

const cards = [
  {
    id: "01.",
    title: "SAP Business Network For Logistics",
    text: "Digital Transformation and Automation Android and IOS Apps Designing Android and IOS Apps.",
    image:
      img1
  },
  {
    id: "02.",
    title: "SAP Transportation Management",
    text: "Digital Transformation and Automation Android and IOS Apps Designing Android and IOS Apps.",
    image:
     img2
  },
];

  return (
    <section className="sap-section">

 <div className='sap-container'>
         <div className="Sec-module-tag">MODULES</div>

      <h1 className="Sec-heading">
        Let's Elevate Your
        <br />
        <span>SAP Experience</span> Together!
      </h1>

      <div className="Sec-cards">

        {cards.map((item, index) => (
          <div
            className={`Sec-module-card Sec-card${index + 1}`}
            key={item.id}
          >
            <div className="Sec-left">
              <img src={item.image} alt="" />
            </div>

            <div className="Sec-right">
              <h2>{item.title}</h2>

              <p>{item.text}</p>

              <button>
                Learn More
                <span>→</span>
              </button>
            </div>

            <span className="Sec-number">{item.id}</span>
          </div>
        ))}

      </div>
 </div>

    </section>
  );
}


export default Section3