import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ServicesListItems = () => {
  const [active, setActive] = useState("design");

  const { hash } = useLocation();

  useEffect(() => {
    setActive(hash.substring(1));
  }, [hash]);

  return (
    <>
      <div className="px-5">
        <div className="row m-0 sidebar py-1 px-3" id="design">
          <div className="col-md-12">
            <div class="card">
              <div class="card-header service-brand">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed services-button"
                    type="button"
                    onClick={() => setActive("design")}
                  >
                    <div className="row de">
                      <span className="dashed">
                        <span className="circle-desi"></span>
                      </span>{" "}
                      <h1 className="desi">Design</h1>
                    </div>
                  </button>
                </h5>
              </div>
              <div style={{ display: active === "design" ? "block" : "none" }}>
                <div class="card-body service-body">
                  <p className="text-justify">
                    In this fast paced technology driven world, we believe in
                    taking a step back in design as the way forward. We adopt a
                    human approach to aesthetics and functional design that
                    evokes an emotional response.
                  </p>
                  <p className="text-justify">
                    Our design expertise extends to the following services we
                    offer
                  </p>
                  <div class="accordion" id="accordionExample">
                    <ul className="ser">
                      <li className="brandlist">
                        <div class="card ">
                          <div class="card-header service-brand">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse1"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/Brand identity.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Brand Identity
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse1"
                            class="collapse"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body service-body">
                              Your brand is your personal connection to the rest
                              of the world. We ideate and design your brand
                              identity to make it simple, memorable and
                              distinctive.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/package.gif "
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Packaging
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse2"
                            class="collapse"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body service-body">
                              Designing your products goes a long way in
                              communicating what your brand stands for! Leave it
                              to us to create a unique product design that
                              stands out .
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/ui ux.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                UI/UX design
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse3"
                            class="collapse"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body service-body">
                              The human approach to designing user interfaces
                              and functionality is the key to a seamless user
                              experience. We adopt our learnings in neuroscience
                              of consumer behaviour to design and develop your
                              brand interface.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse4"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/Brand assets.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Brand assets/collateral
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse4"
                            class="collapse"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body service-body">
                              Your brand Assets are an extension of your brand
                              identity. With consistency and brand voice at the
                              heart of every collateral, we ensure that you
                              maintain your distinctive flavour of
                              communication.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse5"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/motion graphics.gif "
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Visual + Motion design
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse5"
                            class="collapse"
                            data-parent="#accordionExample"
                          >
                            <div class="card-body service-body">
                              We bring design to life through animation and
                              motion graphics that can be leveraged for various
                              applications such as training, marketing
                              communications etc.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="text-justify">
                    We bring design to life through animation and motion
                    graphics that can be leveraged for various applications such
                    as training, marketing communications etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row m-0 sidebar py-1 px-3"
          id="digital-social"
          // onFocus={() => setActive("digital-social")}
        >
          <div className="col-md-12">
            <div class="card">
              <div class="card-header service-brand ">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed services-button"
                    type="button"
                    onClick={() => setActive("digital-social")}
                  >
                    <div className="row de">
                      <span className="dashed">
                        <span className="circle-desi"></span>
                      </span>{" "}
                      <h1 className="desi">Digital & Social</h1>
                    </div>
                  </button>
                </h5>
              </div>
              <div
                style={{
                  display: active === "digital-social" ? "block" : "none",
                }}
              >
                <div class="card-body service-body">
                  <p className="text-justify">
                    The world is constantly evolving with respect to how
                    customers behave and their purchase decision is often
                    expedited by evaluating brands digitally. As a brand, it is
                    now imperative to have a strong digital presence to capture
                    customer interest and be a part of his/her decision making.
                    We got you covered in going digital, the right way!
                  </p>
                  <div class="accordion" id="accordionExample1">
                    <ul className="ser">
                      <li className="brandlist">
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse6"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/website1.gif "
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Website & Mobile app development
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse6"
                            class="collapse"
                            data-parent="#accordionExample1"
                          >
                            <div class="card-body service-body">
                              With our human approach to UI/UX development, we
                              extend our services to development of your website
                              and Mobile app focused on attributes such as
                              responsiveness, speed, reliability and
                              convenience. Get in touch with us to integrate
                              your business digitally to your website and Mobile
                              app.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse7"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/socialmedia.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Social media marketing
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse7"
                            class="collapse"
                            data-parent="#accordionExample1"
                          >
                            <div class="card-body service-body">
                              Take your brand to where your customer is! With
                              this in mind, we segment, target and position your
                              brand products for optimal results by leveraging
                              social media marketing. From lead generation to
                              brand awareness, we ensure your brand gets the
                              attention it deserves!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse8"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/performance marketing.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Performance marketing
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse8"
                            class="collapse"
                            data-parent="#accordionExample1"
                          >
                            <div class="card-body service-body">
                              With social media and Google evolving as prime
                              mediums of lead generation, we provide optimised
                              results that are cost effective and accountable
                              with daily campaign reports. It's time to evolve
                              your business into acquiring customers digitally.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 sidebar py-1 px-3" id="advertising">
          <div className="col-md-12">
            <div class="card">
              <div class="card-header service-brand ">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed services-button"
                    type="button"
                    onClick={() => setActive("advertising")}
                  >
                    <div className="row de">
                      <span className="dashed">
                        <span className="circle-desi"></span>
                      </span>{" "}
                      <h1 className="desi">Advertising</h1>
                    </div>
                  </button>
                </h5>
              </div>
              <div
                style={{ display: active === "advertising" ? "block" : "none" }}
              >
                <div class="card-body service-body">
                  <p className="text-justify">
                    Every brand needs activities that help create awareness,
                    interest and desire that translates to actionable outcomes.
                    One such effective way is the choice of advertising your
                    brand through various effective channels. Based on your
                    brand, we integrated your brand communications by providing
                    an advertising plan that best suits your needs!
                  </p>
                  <p className="text-justify">
                    Our design expertise extends to the following services we
                    offer
                  </p>
                  <div class="accordion" id="accordionExample2">
                    <ul className="ser">
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse9"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/print.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Print
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse9"
                            class="collapse"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body service-body">
                              Even in this digital world, print holds more
                              credibility and trust adding to the multi sensory
                              experience that people enjoy. We design thoughtful
                              print ads and strategise with optimal placements ,
                              that helps maximise results from targeted customer
                              segments.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse10"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/ElectronicTV&Radio.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Electronic - TV & Radio
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse10"
                            class="collapse"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body service-body">
                              Television and Radio are means of mass media
                              communications through which brands advertise. We
                              employ the right mix of ad placements across these
                              channels that provides the best value for your
                              investment in advertising.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse11"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/OOH.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                OOH
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse11"
                            class="collapse"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body service-body">
                              This is the fastest way for instant brand
                              recognition in a targeted locality. If you know
                              your target market, leave it to us to curate and
                              place a simple yet disruptive ads that catches the
                              attention your brand deserves!
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse12"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/Mediaplanning&buying.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Media planning & buying
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse12"
                            class="collapse"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body service-body">
                              Have a marketing budget in your mind? Get in touch
                              with us to procure media spaces at optimal prices
                              for your brand.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse13"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/PublicRelations.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Public Relations
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse13"
                            class="collapse"
                            data-parent="#accordionExample2"
                          >
                            <div class="card-body service-body">
                              Your brand story is just a call away from being
                              produced by us! Let us create your captivating
                              brand story that speaks to the world about your
                              brand, vision, products and promise. We have the
                              best ad directors on board to shoot commercials
                              that resonate with your audiences and give you
                              results.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 sidebar py-1 px-3" id="films-production">
          <div className="col-md-12">
            <div class="card">
              <div class="card-header service-brand ">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed services-button"
                    type="button"
                    onClick={() => setActive("films-production")}
                  >
                    <div className="row de">
                      <span className="dashed">
                        <span className="circle-desi"></span>
                      </span>{" "}
                      <h1 className="desi">Films & Production</h1>
                    </div>
                  </button>
                </h5>
              </div>
              <div
                style={{
                  display: active === "films-production" ? "block" : "none",
                }}
              >
                <div class="card-body service-body">
                  <p className="text-justify">
                    Your brand story is just a call away from being produced by
                    us! Let us create your captivating brand story that speaks
                    to the world about your brand, vision, products and promise.
                    We have the best ad directors on board to shoot commercials
                    that resonate with your audiences and give you results.
                  </p>
                  <p className="text-justify">
                    Our design expertise extends to the following services we
                    offer
                  </p>
                  <div class="accordion" id="accordionExample3">
                    <ul className="ser">
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse14"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/05Camera.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                TVCs
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse14"
                            class="collapse"
                            data-parent="#accordionExample3"
                          >
                            <div class="card-body service-body">
                              Your brand story is just a call away from being
                              produced by us! Let us create your captivating
                              brand story that speaks to the world about your
                              brand, vision, products and promise. We have the
                              best ad directors on board to shoot commercials
                              that resonate with your audiences and give you
                              results.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse15"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/05Camera.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Corporate films
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse15"
                            class="collapse"
                            data-parent="#accordionExample3"
                          >
                            <div class="card-body service-body">
                              Your brand story is just a call away from being
                              produced by us! Let us create your captivating
                              brand story that speaks to the world about your
                              brand, vision, products and promise. We have the
                              best ad directors on board to shoot commercials
                              that resonate with your audiences and give you
                              results.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse16"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/05Camera.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Social media commercials
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse16"
                            class="collapse"
                            data-parent="#accordionExample3"
                          >
                            <div class="card-body service-body">
                              Your brand story is just a call away from being
                              produced by us! Let us create your captivating
                              brand story that speaks to the world about your
                              brand, vision, products and promise. We have the
                              best ad directors on board to shoot commercials
                              that resonate with your audiences and give you
                              results.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="brandlist">
                        {" "}
                        <div class="card">
                          <div class="card-header service-brand ">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed services-button"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapse17"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <img
                                  src="../images/05Camera.gif"
                                  alt=""
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    paddingRight: "5px",
                                  }}
                                />
                                Product, food and fashion photography
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse17"
                            class="collapse"
                            data-parent="#accordionExample3"
                          >
                            <div class="card-body service-body">
                              Looking for product photography? Look no further
                              as our team excels in accentuating and clicking
                              your products with everything lights, camera and
                              action!
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <p className="text-justify">
            We bring design to life through animation and motion
            <br /> graphics that can be leveraged for various
            <br /> applications such as training, marketing
            <br /> communications etc
          </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesListItems;
