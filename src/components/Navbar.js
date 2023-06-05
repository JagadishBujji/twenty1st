import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/theme-context";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const toggleThemeMode = () => {
    toggleTheme();
    // to change css variables
    const body = document.querySelector("body");
    const isDarkMode = body.getAttribute("data-theme") === "dark";
    body.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  };

  // useEffect(() => {
  //   console.log("darkM: ", isDarkMode);
  // }, [isDarkMode]);

  document.addEventListener("DOMContentLoaded", function () {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", function () {
      if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
      } else {
        dropdownMenu.style.display = "none";
      }
    });

    document.addEventListener("click", function (event) {
      var targetElement = event.target;
      if (
        !dropdownToggle.contains(targetElement) &&
        !dropdownMenu.contains(targetElement)
      ) {
        dropdownMenu.style.display = "none";
      }
    });
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container-fluid ">
        <Link className="navbar-brand" to={"/"}>
          {/* <a className="navbar-brand" href="/"> */}
          <img
            src="../images/twentyonestlogo.png"
            alt="logo"
            className="logo-img"
          />
          {/* </a> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <a className="nav-link " href="#">
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={"work"}>
                Work <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Service
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div
                    className="col-md-3"
                    // onClick={() => navigate("services#design")}
                  >
                    <NavHashLink
                      style={{ textDecoration: "none" }}
                      smooth={true}
                      to="/services#design"
                    >
                      <div className="submenu">
                        <div
                          className="card digital"
                          style={{ background: "#d4d4d4" }}
                        >
                          <h4 className="design1">Design</h4>
                          <div className="row iocn-arr">
                            <p className="pack">
                              Brand Identity
                              <br /> Packaging
                            </p>
                            <ArrowRightAltIcon sx={{ color: "#000" }} />
                          </div>
                        </div>
                      </div>
                    </NavHashLink>
                  </div>
                  <div
                    className="col-md-3"
                    // onClick={() => navigate("services#digital-social")}
                  >
                    <NavHashLink
                      style={{ textDecoration: "none" }}
                      smooth={true}
                      to="/services#digital-social"
                    >
                      <div className="submenu ">
                        <div
                          className="card digital"
                          style={{ background: "#fdf6e8" }}
                        >
                          <h4 className="design1">Digital & Social</h4>
                          <div className="row iocn-arr">
                            <p className="pack">
                              Website development
                              <br /> Social media marketing
                            </p>
                            <ArrowRightAltIcon sx={{ color: "#000" }} />
                          </div>
                        </div>
                      </div>
                    </NavHashLink>
                  </div>
                  <div
                    className="col-md-3"
                    // onClick={() => navigate("services#advertising")}
                  >
                    <NavHashLink
                      style={{ textDecoration: "none" }}
                      smooth={true}
                      to="/services#advertising"
                    >
                      <div className="submenu ">
                        <div
                          className="card digital"
                          style={{ background: "#faf4ff" }}
                        >
                          <h4 className="design1">Advertising</h4>
                          <div className="row iocn-arr">
                            <p className="pack">
                              Print
                              <br /> TV media
                            </p>
                            <ArrowRightAltIcon sx={{ color: "#000" }} />
                          </div>
                        </div>
                      </div>
                    </NavHashLink>
                  </div>
                  <div
                    className="col-md-3"
                    // onClick={() => navigate("services#films-production")}
                  >
                    <NavHashLink
                      style={{ textDecoration: "none" }}
                      smooth={true}
                      to="/services#films-production"
                    >
                      <div className="submenu ">
                        <div
                          className="card digital"
                          style={{ background: "#f4c2c2" }}
                        >
                          <h4 className="design1">Films & Production</h4>
                          <div className="row iocn-arr">
                            <p className="pack">
                              TV Commercials
                              <br /> Social Media Commercials
                            </p>
                            <ArrowRightAltIcon sx={{ color: "#000" }} />
                          </div>
                        </div>
                      </div>
                    </NavHashLink>
                  </div>
                </div>
              </div>
              {/* <div className="dropdown-content">
                
              </div> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-link " href="#">
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="contact" id="contact">
                Contact
              </Link>
            </li>
            {/* light-mode & dark-mode */}
            <li className="nav-item" onClick={toggleThemeMode}>
              {isDarkMode ? (
                <div className="nav-link" key={"sun"}>
                  {/* <img
                    src="../images/sun.png"
                    alt="sun-icon"
                    className="sun-icon"
                  /> */}
                  <WbSunnyIcon sx={{ color: "#fff" }} />
                </div>
              ) : (
                <div className="nav-link" key={"moon"}>
                  <DarkModeIcon />
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
