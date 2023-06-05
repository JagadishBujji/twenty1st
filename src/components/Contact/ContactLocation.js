import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import Svg from "../../Reuseable/Svg";

const ContactLocation = ({ setCurrectCity, currentCity }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="row  container Location">
        <div className="col-md-5">
          <div
            className="row bang"
            onClick={() =>
              setCurrectCity({
                city: "chennai",
                lat: 13.031557660741473,
                lng: 80.21118112883538,
              })
            }
          >
            {isDarkMode ? (
              <img
                src="../images/sri-ranganathasvamy_white.png"
                alt=""
                className="sri-img"
              />
            ) : (
              <img
                src="../images/sri-ranganathasvamy.png"
                alt=""
                className="sri-img"
              />
            )}

            <div className="totalarea">
              <h2 className="area">CHENNAI</h2>
              <p className="addres">
                No. 7/1, 2nd cross street, 12th
                <br /> Ave, Ashok Nagar, Chennai,
                <br />
                Tamilnadu - 600 083
              </p>
            </div>
          </div>

          <div
            className="row bang"
            onClick={() =>
              setCurrectCity({
                city: "bangalore",
                lat: 12.95181841773443,
                lng: 77.60795137116463,
              })
            }
          >
            {isDarkMode ? (
              <img src="../images/city_white.png" alt="" className="sri-img" />
            ) : (
              <img src="../images/city.png" alt="" className="sri-img" />
            )}

            <div className="totalarea">
              <h2 className="area">BANGALORE</h2>
              <p className="addres">
                Novel Business Park, #57,13th
                <br />
                Cross, Baldwins Road,
                <br />
                Koramangala,Bengaluru,
                <br />
                Karnataka - 560 030
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 svg">
          <Svg />
        </div>
        <div className="col-md-5 sing">
          <div
            className="row bang"
            onClick={() =>
              setCurrectCity({
                city: "singapore",
                lat: 13.031557660741473,
                lng: 80.21118112883538,
              })
            }
          >
            {isDarkMode ? (
              <img
                src="../images/merlion_white.png"
                alt=""
                className="sri-img"
              />
            ) : (
              <img src="../images/merlion.png" alt="" className="sri-img" />
            )}
            <div>
              <h2 className="area">SINGAPORE</h2>
              <p className="addres">
                Bukit Batok West Avenue 6,
                <br /> #11-234, Singapore - 650 116
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLocation;
