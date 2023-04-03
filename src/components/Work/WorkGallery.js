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
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/GSquare%20Performance%20Marketing-100.jpg?alt=media&token=ee978988-0e2e-412f-b26b-5ae54d6958cc",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Gsquare%20print-100.jpg?alt=media&token=2f882816-9c7b-418d-b57d-9fe92fb1317f",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/GSquare%20SM-100.jpg?alt=media&token=548d75c0-cb60-447a-8cb0-7def9c6cb01c",
  ];
  const diyaImages = [
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/D.I.Y.A%20Ads-100.jpg?alt=media&token=1385ad8d-1b07-4a82-b9b4-48f54c533c41",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/D.I.Y.A%20Motion%20Graphics-100.jpg?alt=media&token=ad33a4a6-0323-430d-a8b5-0282d463165b",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/D.I.Y.A%20Web-100.jpg?alt=media&token=68fe50c2-525e-482d-870d-fa0841124f4e",
  ];
  const jalliImages = [
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Jallikattu-100.jpg?alt=media&token=41132c99-7dcd-421c-833f-2b9e73765c4e",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Jallikattu%20app-100.jpg?alt=media&token=1909a087-aebf-4afa-835e-d4b198f91f29",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Jallikattu%20Junction-100.jpg?alt=media&token=c3adf3bd-edb4-424a-a457-1a932db9c873",
  ];
  const ArteImages = [
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Artboard%201%20copy%204-100.jpg?alt=media&token=1582ebaa-437c-4a35-a073-7b7335d3c265",
  ];
  const kvpImages = [
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/KVP%20App-100.jpg?alt=media&token=1704c6de-1ad7-47eb-ae6f-1b4475567051",
    "https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/KVP%20Packaging-100.jpg?alt=media&token=ade392f0-38a1-4ec2-ae73-633a8fb059a7",
  ];
  const swipeImages = ["https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Arte%20Makeup%20Academy-100.jpg?alt=media&token=1afdf850-6cf9-483a-a570-1ed77151e401"];
  const hospitalImages = ["https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/AKH-100.jpg?alt=media&token=0810fc00-2f35-44db-8065-c6a7c7f11ec9"];

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
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/Arte%20Makeup%20Academy-100.jpg?alt=media&token=1afdf850-6cf9-483a-a570-1ed77151e401"
            title="Swipe Right"
            images={swipeImages}
          />
        </div>
        <div className="col-md-6 bottom">
          <h2 className="sun">Adithya Kamaraj Hospital</h2>
          <GalleryModal
            modalimage="https://firebasestorage.googleapis.com/v0/b/twentyone-st.appspot.com/o/AKH-100.jpg?alt=media&token=0810fc00-2f35-44db-8065-c6a7c7f11ec9"
            title="Adithya Kamaraj Hospital"
            images={hospitalImages}
          />
        </div>
      </div>
    </>
  );
};

export default WorkGallery;
