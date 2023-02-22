import React from "react";
import GalleryModal from "../../Reuseable/GalleryModal";

const WorkGallery = () => {
  return (
    <>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Sundaram Finance</h2>

          <GalleryModal modalimage="../images/SF2.png" title="Sundaram Finance" />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Gsquare Housing</h2>
          <GalleryModal modalimage="../images/Gsquare.png" title="Gsquare Housing" />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">DIYA Robotics</h2>
          <GalleryModal modalimage="../images/diyaimg.png" title="DIYA Robotics" />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">RKR Dairy Products</h2>
          <GalleryModal modalimage="../images/jalli.png" title="RKR Dairy Products" />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Arte Makeup Academy</h2>
          <GalleryModal modalimage="../images/art.png" title="Arte Makeup Academy" />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">KVP Dairy Farm</h2>
          <GalleryModal modalimage="../images/kvpimg.png" title="KVP Dairy Farm" />
        </div>
      </div>
      <div className="row  container gallery">
        <div className="col-md-6 bottom">
          <h2 className="sun">Swipe Right</h2>
          <GalleryModal modalimage="../images/SF2.png" title="Swipe Right" />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Adithya Kamaraj Hospital</h2>
          <GalleryModal modalimage="../images/Gsquare.png" title="Adithya Kamaraj Hospital" />
        </div>
      </div>
    </>
  );
};

export default WorkGallery;
