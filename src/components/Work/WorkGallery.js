import React from "react";
import GalleryModal from "../../Reuseable/GalleryModal";

const WorkGallery = () => {
  const sundaramImages = [
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/sf%20-100.jpg?alt=media&token=0a9240b1-559f-4979-a461-7f6c1c0693cb",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/SF%20Ads-100.jpg?alt=media&token=cdebbdae-a8e1-428d-bc60-d35792870cfc",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/SF%20SM-100.jpg?alt=media&token=d1c2bd2c-e214-46c1-b04a-0f5708a68246",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/SF%20Used%20Utsav-100.jpg?alt=media&token=fd4be923-8787-4bd0-a6c6-547d7102a6da",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/SF%20Emailer-100.jpg?alt=media&token=61d6cbdc-a039-428c-a2e7-0cbf007d6a42",
  ];
  const gsquareImages = [
    "../images/gsquare-1.jpg",
    "../images/gsquare-2.jpg",
    "../images/gsquare-3.jpg",
  ];
  const diyaImages = [
    "../images/diya-1.jpg",
    "../images/diya-2.jpg",
    "../images/diya-3.jpg",
  ];
  const jalliImages = [
    "../images/Jallikattu-1.jpg",
    "../images/Jallikattu-2.jpg",
    "../images/Jallikattu-3.jpg",
  ];
  const ArteImages = ["../images/Art-1.jpg"];
  const kvpImages = ["../images/KVP-1.jpg", "../images/KVP-2.jpg"];
  const swipeImages = ["../images/Art-1.jpg"];
  const hospitalImages = ["../images/AKH-1.jpg"];

  return (
    <>
      <div className="row container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Sundaram Finance</h2>

          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/SF2.png?alt=media&token=bc7f12a9-cfd5-447e-a093-1bfbef667ada"
            title="Sundaram Finance"
            images={sundaramImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Gsquare Housing</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/pdfArtboard%201%402x.png?alt=media&token=46294e40-523f-4b11-b4f5-9146116757f8"
            title="Gsquare Housing"
            images={gsquareImages}
          />
        </div>
      </div>
      <div className="row container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">DIYA Robotics</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/pdfArtboard%201%20copy%204%402x.png?alt=media&token=e131daa3-8197-475e-b3f3-bbe87e34a453"
            title="DIYA Robotics"
            images={diyaImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">RKR Dairy Products</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/pdfArtboard%201%20copy%205%402x.png?alt=media&token=c1845cfe-3316-49f6-8660-3aa155551438"
            title="RKR Dairy Products"
            images={jalliImages}
          />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Arte Makeup Academy</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/pdfArtboard%201%20copy%206%402x.png?alt=media&token=c9a916e3-7650-4204-baf4-6bb20769c2d2"
            title="Arte Makeup Academy"
            images={ArteImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">KVP Dairy Farm</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/pdfArtboard%201%20copy%207%402x.png?alt=media&token=6ad3ac41-ae5b-4f4f-88d5-7279d6659d35"
            title="KVP Dairy Farm"
            images={kvpImages}
          />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Swipe Right</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/SF2.png?alt=media&token=bc7f12a9-cfd5-447e-a093-1bfbef667ada"
            title="Swipe Right"
            images={swipeImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Adithya Kamaraj Hospital</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/pdfArtboard%201%402x.png?alt=media&token=46294e40-523f-4b11-b4f5-9146116757f8"
            title="Adithya Kamaraj Hospital"
            images={hospitalImages}
          />
        </div>
      </div>
    </>
  );
};

export default WorkGallery;
