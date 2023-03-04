import React from "react";
const Testmonial = ({ isDarkMode }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
            id="dot"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            id="dot"
            data-slide-to="1"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            id="dot"
            data-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item  active">
            <div className="row">
              <div className="col-md-5 image-square">
                {isDarkMode ? (
                  <img
                    src="../images/gsquare_white.png"
                    alt=""
                    className="square"
                  />
                ) : (
                  <img
                    src="../images/gsquare(2).png"
                    alt=""
                    className="square"
                  />
                )}
              </div>
              <div className="col-md-7">
                <div className="row circle">
                  <span className="cir"></span>
                  <span className="cir"></span>
                  <span className="cir"></span>
                </div>
                <div className="row star">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <h3 className="say">What Clients say</h3>
                <p className="founder">founder, Head of UX at twentyone’st</p>
                <p className="founder">
                  Behavioral science and Neuromarketing expert
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-md-5 image-square">
                {isDarkMode ? (
                  <img
                    src="../images/gsquare_white.png"
                    alt=""
                    className="square"
                  />
                ) : (
                  <img
                    src="../images/gsquare(2).png"
                    alt=""
                    className="square"
                  />
                )}
              </div>
              <div className="col-md-7">
                <div className="row circle">
                  <span className="cir"></span>
                  <span className="cir"></span>
                  <span className="cir"></span>
                </div>
                <div className="row star">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <h3 className="say">What Clients say</h3>
                <p className="founder">founder, Head of UX at twentyone’st</p>
                <p className="founder">
                  Behavioral science and Neuromarketing expert
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-md-5 image-square">
                {isDarkMode ? (
                  <img
                    src="../images/gsquare_white.png"
                    alt=""
                    className="square"
                  />
                ) : (
                  <img
                    src="../images/gsquare(2).png"
                    alt=""
                    className="square"
                  />
                )}
              </div>
              <div className="col-md-7">
                <div className="row circle">
                  <span className="cir"></span>
                  <span className="cir"></span>
                  <span className="cir"></span>
                </div>
                <div className="row star">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <h3 className="say">What Clients say</h3>
                <p className="founder">founder, Head of UX at twentyone’st</p>
                <p className="founder">
                  Behavioral science and Neuromarketing expert
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          {/* <span class="carousel-control-prev-icon" ></span> */}
          <i class="fas fa-chevron-left " aria-hidden="true"></i>
          {/* <span class="sr-only">Previous</span> */}
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          {/* <span class="carousel-control-next-icon" ></span> */}
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
          {/* <span class="sr-only">Next</span> */}
        </a>
      </div>
    </>
  );
};

export default Testmonial;
