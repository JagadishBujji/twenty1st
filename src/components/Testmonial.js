import React from "react";

const Testimonial = ({ isDarkMode }) => {
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
              <div className="row circle">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
              </div>
              <div className="row star">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <h3 className="say">
                The pan-India branding conceptualized and designed by Twenty
                Onest helped us connect with our target audience, leading to a
                ₹30 crore (+75% increase) in our revenue!
              </h3>
              <p className="founder">Jennifer Joseph</p>
              <p className="founder">
                Deputy Manager - Corporate Communications, Sundaram Finance
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
              <div className="row circle">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
              </div>
              <div className="row star">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <h3 className="say">
                I like the ingenuity that these folks bring to their work. They
                are a young team, they think differently, keep up with the
                trends, yet ensure that they highlight the essence of the brand.
                Their turnaround is quick along with nearly flawless copy and
                design. Their service is good, and they are great at building
                relationships. I’d recommend them to anyone who wants to use
                their services.
              </h3>
              <p className="founder">Sandhya Kumar</p>
              <p className="founder">
                Head - Corporate Communications, Sundaram Finance
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-4 image-square">
              {isDarkMode ? (
                <img src="../images/icc.png" alt="" className="square" />
              ) : (
                <img src="../images/icc.png" alt="" className="square" />
              )}
            </div>
            <div className="col-md-7">
              <div className="row circle">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
              </div>
              <div className="row star">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <h3 className="say">
                Technically sound, professional with tremendous work ethics.
                Knowledgeable in adapting to any field. A systematic manner of
                work. Feeling proud to be associated with them. Looking forward
                to our long journey!
              </h3>
              <p className="founder">Santhosh Gopi</p>
              <p className="founder">ICC-Certified Cricket Coach</p>
            </div>
          </div>
        </div>
      </div>
      <a
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
      </a>
    </div>
  );
};

export default Testimonial;
