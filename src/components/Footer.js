import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="row m-0 footer">
        <div className="col-lg-3">
          {isDarkMode ? (
            <>
              <img
                src="../images/Twentyblack (2).png"
                alt=""
                className="footer-logo"
              />
              <div className="row social-row">
                <a href="">
                  <img
                    src="../images/facebook (2).png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/instagram (2).png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/twitter (2).png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/linkedin (2).png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/youtube (2).png"
                    alt=""
                    className="social-link"
                  />
                </a>
              </div>
            </>
          ) : (
            <>
              <img
                src="../images/Twentyblack.png"
                alt=""
                className="footer-logo"
              />
              <div className="row social-row">
                <a href="">
                  <img
                    src="../images/facebook.png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/instagram.png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/twitter.png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/linkedin.png"
                    alt=""
                    className="social-link"
                  />
                </a>
                <a href="">
                  <img
                    src="../images/youtube.png"
                    alt=""
                    className="social-link"
                  />
                </a>
              </div>
            </>
          )}

          <p className="copyright">
            <b>
              <i class="far fa-copyright"></i>
              2021 Twenty One'st <br />
              Privacy Policy
            </b>
          </p>
        </div>
        <div className="col-lg-3 pt-md-5">
          <h4 className="link-head">Links</h4>
          <ul className="Links">
            <li className="footerlink">
              <a href="https://twentyonest.in/work" className="footer-link">
                Works
              </a>
            </li>
            {/* <li className="footerlink">
              <a href="" className="footer-link">
                About us
              </a>
            </li> */}
            <li className="footerlink">
              <a href="https://twentyonest.in/contact" className="footer-link">
                Contact us
              </a>
            </li>
            {/* <li className="footerlink">
              <a href="" className="footer-link">
                Blog
              </a>
            </li> */}
          </ul>
        </div>
        <div className="col-lg-3 pt-md-5">
          <h4 className="link-head">Services</h4>
          <ul className="Links">
            <li className="footerlink">
              <a href="" className="footer-link">
                Design
              </a>
            </li>
            <li className="footerlink">
              <a href="" className="footer-link">
                DIGITAL & SOCIAL
              </a>
            </li>
            <li className="footerlink">
              <a href="" className="footer-link">
                ADVERTISING
              </a>
            </li>
            <li className="footerlink">
              <a href="" className="footer-link">
                FILMS & PRODUCTION
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 pt-md-5">
          <h4 className="link-head">Contact Us</h4>
          <ul className="contact-link">
            {/* <li className="contact-details">
              <img
                src="../images/location.png"
                alt="icon"
                className="footericon"
              />
              <p className="add">
                No. 7/1, Vaigai Colony, 2nd cross street, 12th Ave, Ashok
                Nagar,Chennai, Tamil Nadu 600089.
              </p>
            </li> */}
            {/* <li className="contact-details">
              <img
                src="../images/location.png"
                alt="icon"
                className="footericon"
              />
              <p className="add">
                Bukit Batok West Avenue 6, #11-234, Singapore 650116.
              </p>
            </li> */}
            {isDarkMode ? (
              <>
                <li className="contact-details">
                  <img
                    src="../images/envalope (2).png"
                    alt="icon"
                    className="footericon"
                  />
                  <p className="add">hey@twentyonest.in</p>
                </li>
                <li className="contact-details">
                  <img
                    src="../images/phone (2).png"
                    alt="icon"
                    className="footericon"
                  />
                  <a className="add" href="tel:9840151021">
                    +91 98401 51021
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="contact-details">
                  <img
                    src="../images/envalope.png"
                    alt="icon"
                    className="footericon"
                  />
                  <p className="add">hey@twentyonest.in</p>
                </li>
                <li className="contact-details">
                  <img
                    src="../images/phone.png"
                    alt="icon"
                    className="footericon"
                  />
                  <a className="add" href="tel:9840151021">
                    +91 98401 51021
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
