import React from "react";
const Faq = ({ isDarkMode }) => {
  return (
    <>
      <div className="row container-fluid faq-overall align-items-center">
        <div className="col-md-7 p-0">
          <section class="faq-main ">
            <section class="faq">
              <div class="container">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 p-0">
                    <div class="accordion" id="accordionExample">
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed w-auto"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              How important is Integrated
                              <br /> marketing communications?
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseOne"
                          class="collapse"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            To put it simply, optimal consistency and frequency
                            of communication across channels relevant to your
                            audiences gives you best results.
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed w-auto"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              What is my brand voice
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse4"
                          class="collapse"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body ">
                            Well, imagine how your friend will describe you as a
                            person. Likewise, your audiences can attribute a
                            unique personality to your brand based on
                            consistency in the way your brand behaves and
                            communicates!
                          </div>
                        </div>
                      </div>
                      <div class="card m-0">
                        <div class="card-header ">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed w-auto"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse5"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              When should I reposition my brand?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse5"
                          class="collapse"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            Customer preferences keep evolving with time. Hence,
                            the key is to understand the evolution of design,
                            aesthetics, marketing communications, customer
                            experiences etc. and evaluate your brand relevance
                            for the present as well as the future. This is a
                            useful way to measure if a repositioning strategy is
                            necessary for your brand.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="col-md-5">
          {isDarkMode ? (
            <img src="../images/question_white.png" alt="" className="faq" />
          ) : (
            <img src="../images/ANIMATION-01.png" alt="" className="faq" />
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
