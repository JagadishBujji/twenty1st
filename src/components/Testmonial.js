import React, { useEffect } from "react";
import "./Testimonial.css";

const Testimonial = ({ isDarkMode }) => {
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const carouselInstance = new window.bootstrap.Carousel(carousel, {
      interval: 2000, // Adjust the interval (in milliseconds) as needed
      pause: "hover", // Pause on hover
    });

    // Clean up the carousel instance on component unmount
    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide container"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4 image-square">
              {isDarkMode ? (
                <img src="images/sf_white.png" alt="" className="square" />
              ) : (
                <img src="images/sf.png" alt="" className="square" />
              )}
            </div>
            <div className="col-md-7">
              {/* <div className="row circle">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
              </div> */}
              <h3 className="say">What Clients Say</h3>
              {/* <div className="row star"> */}
              <div className="row circle">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="founder">
                The pan-India branding conceptualized and designed by Twenty
                Onest helped us connect with our target audience, leading to a
                ₹30 crore (+75% increase) in our revenue!
              </p>
              <p className="founder">Jennifer Joseph</p>
              <p className="founder">
                Deputy Manager - Corporate Communications
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4 image-square">
              {isDarkMode ? (
                <img src="images/sf_white.png" alt="" className="square" />
              ) : (
                <img src="images/sf.png" alt="" className="square" />
              )}
            </div>
            <div className="col-md-7">
              {/* <div className="row circle">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
              </div> */}
              <h3 className="say">What Clients Say</h3>
              {/* <div className="row star"> */}
              <div className="row circle">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="founder">
                I like the ingenuity that these folks bring to their work. They
                are a young team, they think differently, keep up with the
                trends, yet ensure that they highlight the essence of the brand.
                I’d recommend them to anyone who wants to use their services.
              </p>
              <p className="founder">Sandhya Kumar</p>
              <p className="founder">Head - Corporate Communications</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4 image-square">
              {isDarkMode ? (
                <img
                  src="../images/CricTamizha-b.png"
                  alt=""
                  className="square"
                />
              ) : (
                <img
                  src="../images/CricTamizha-w.png"
                  alt=""
                  className="square"
                />
              )}
            </div>
            <div className="col-md-7">
              {/* <div className="row circle">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
              </div> */}
              <h3 className="say">What Clients Say</h3>
              {/* <div className="row star"> */}
              <div className="row circle">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="founder">
                Technically sound, professional with tremendous work ethics.
                Knowledgeable in adapting to any field. A systematic manner of
                work. Feeling proud to be associated with them. Looking forward
                to our long journey!
              </p>
              <p className="founder">Santhosh Gopi</p>
              <p className="founder">ICC-Certified Cricket Coach</p>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </a> */}
    </div>
  );
};

export default Testimonial;
