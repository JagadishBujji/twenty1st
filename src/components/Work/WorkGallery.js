import React from "react";
import GalleryModal from "../../Reuseable/GalleryModal";

const WorkGallery = () => {
  const sundaramImages = [
    "../images/sf-1.jpg",
    "../images/sf-2.jpg",
    "../images/sf-3.jpg",
    "../images/sf-4.jpg",
    "../images/sf-5.jpg",
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
            modalimage="../images/SF2.png"
            title="Sundaram Finance"
            images={sundaramImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Gsquare Housing</h2>
          <GalleryModal
            modalimage="../images/Gsquare.png"
            title="Gsquare Housing"
            images={gsquareImages}
          />
        </div>
      </div>
      <div className="row container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">DIYA Robotics</h2>
          <GalleryModal
            modalimage="../images/diyaimg.png"
            title="DIYA Robotics"
            images={diyaImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">RKR Dairy Products</h2>
          <GalleryModal
            modalimage="../images/jalli.png"
            title="RKR Dairy Products"
            images={jalliImages}
          />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Arte Makeup Academy</h2>
          <GalleryModal
            modalimage="../images/art.png"
            title="Arte Makeup Academy"
            images={ArteImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">KVP Dairy Farm</h2>
          <GalleryModal
            modalimage="../images/kvpimg.png"
            title="KVP Dairy Farm"
            images={kvpImages}
          />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Swipe Right</h2>
          <GalleryModal
            modalimage="../images/SF2.png"
            title="Swipe Right"
            images={swipeImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Adithya Kamaraj Hospital</h2>
          <GalleryModal
            modalimage="../images/Gsquare.png"
            title="Adithya Kamaraj Hospital"
            images={hospitalImages}
          />
        </div>
      </div>
    </>
  );
};

export default WorkGallery;
