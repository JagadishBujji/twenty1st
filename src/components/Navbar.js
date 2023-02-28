import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { DarkMode } from "@mui/icons-material";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light   container-fluid ">
        <a class="navbar-brand" href="/">
          <img
            src="../images/twentyonestlogo.png"
            alt="logo"
            className="logo-img"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto">
            {/* <li class="nav-item">
              <a class="nav-link " href="#">
                Blog
              </a>
            </li> */}
            <li class="nav-item ">
              <a class="nav-link" href="work">
                Work <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                Service
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div className="col-md-3">
                    <a href="" className="submenu ">
                      <div className="card digital green">
                        <h4 className="design1">Design</h4>
                        <div className="row iocn-arr">
                          <p className="pack">
                            Brand Identity
                            <br /> Packaging
                          </p>
                          <ArrowRightAltIcon sx={{ color: "#000" }} />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="" className="submenu ">
                      <div className="card digital yellow">
                        <h4 className="design1">Digital & Social</h4>
                        <div className="row iocn-arr">
                          <p className="pack">
                            Website development
                            <br /> Social media marketing
                          </p>
                          <ArrowRightAltIcon sx={{ color: "#000" }} />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="" className="submenu ">
                      <div className="card digital purpul">
                        <h4 className="design1"> Advertising</h4>
                        <div className="row iocn-arr">
                          <p className="pack">
                            Print
                            <br /> TV media
                          </p>
                          <ArrowRightAltIcon sx={{ color: "#000" }} />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="" className="submenu ">
                      <div className="card digital red">
                        <h4 className="design1">Films & Production</h4>
                        <div className="row iocn-arr">
                          <p className="pack">
                            TV Commercials
                            <br /> Social Media Commercials
                          </p>
                          <ArrowRightAltIcon sx={{ color: "#000" }} />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div class="dropdown-content">
                
              </div> */}
            </li>
            {/* <li class="nav-item">
              <a class="nav-link " href="#">
                Blog
              </a>
            </li> */}
            <li class="nav-item ">
              <a class="nav-link " href="contact" id="contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                <img
                  src="../images/sun.png"
                  alt="sun-icon"
                  className="sun-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
