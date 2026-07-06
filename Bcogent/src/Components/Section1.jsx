import React from 'react'
import img1 from "../assets/1728x700-header-big-supply-chain-management-strategy 1.png"
import img2 from "../assets/7fdb97d4dd0db99a1c4e0c1fe80cae4d4cc8d261.png"
import img3 from "../assets/Mask group.png"
import img4 from "../assets/arrow-curved-2 1.png"
import "../CSS/Section1.css"


const Section1 = () => {
    
  return (
    <section className="hero">

      <div className="arrow">
      <img  className="arrow-img" src={img4} alt="" />
      </div>


      <div className="heading">
        <h1>SAP Digitals</h1>
        <br />
        <h1>Supply Chain</h1>
        <br />
        <h1>Consulting Company</h1>
      </div>

      <div className="cards-grid-cont">

        <div className="left-column">

          <div className="info-card">

            <div className="stats">

              <div>
                <span className="badge yellow">25%</span>
                <p>Cost Reduction</p>
              </div>

              <div>
                <span className="badge blue">99%</span>
                <p>Real-time Visibility</p>
              </div>

            </div>

            <hr />

            <h3>
              One Platform.
              <br />
              Total Supply Chain Visibility...
            </h3>

          </div>

          <div className="video-card">

            <img src={img3} alt="" />
          </div>

        </div>

        <div className="center-card">
          <img src={img1} alt="" />
        </div>


        <div className="right-column">

          <div className="industry-card">
            <h2>20+</h2>
            <p>Major Industries</p>
            <p>We're Covering</p>
          </div>

          <div className="person-card">
            <img src={img2} alt="" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Section1






