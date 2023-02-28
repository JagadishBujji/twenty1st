import React from "react";
const Faq = () => {
  return (
    <>
      <div className="row container-fluid faq-overall">
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
                              class="btn btn-link collapsed"
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer.
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Where can I get some?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse4"
                          class="collapse"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button
                              class="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse5"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Where can I get some?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapse5"
                          class="collapse"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour
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
          <img src="../images/ANIMATION-01.png" alt="" className="faq" />
        </div>
      </div>
    </>
  );
};

export default Faq;
