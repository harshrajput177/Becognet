import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import "../CSS/Section2.css"

const Section2 = () => {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const progress = [
    {
      title: "Consulting",
      value: 92,
    },
    {
      title: "Technology",
      value: 86,
    },
    {
      title: "Solutions",
      value: 66,
    },
  ];

  return (
    <section
      className="supply-section"
      ref={sectionRef}
    >
      <div className="left">

        <h1 className={show ? "title active" : "title"}>
          <span>Let's Build</span>
          <span>Supply</span>
          <span>Chain</span>
          <span>Future</span>
          <span>Today</span>
        </h1>

        <div className="bottom-line"></div>

      </div>

      <div className="right">

        <div className="features">

          <div>
            <i className=" check-icon"> <FaCheck className='fa-solid-in'/></i>
            End-to-End Supply Chain Transformation
          </div>

          <div>
            <i className=" check-icon"><FaCheck className='fa-solid-in'/></i>
            Intelligent Warehouse & Logistics Solutions
          </div>

          <div>
            <i className="check-icon"><FaCheck className='fa-solid-in'/></i>
            Real-Time Visibility and Process Automation
          </div>

          <div>
            <i className="check-icon"><FaCheck className='fa-solid-in'/></i>
            SAP-Powered Innovation for Sustainable Growth
          </div>

        </div>

        <button className="discover-btn">
          Discover More →
        </button>

        <div className="progress-wrapper">

          {progress.map((item, index) => (
            <div
              className="progress-item"
              key={index}
            >
              <div className="label">
                <h3>{item.title}</h3>
                <span>{item.value}%</span>
              </div>

              <div className="progress-bar">

                <div
                  className={`progress-fill ${show ? "animate" : ""}`}
                  style={{
                    width: show ? `${item.value}%` : "0%",
                  }}
                ></div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Section2
