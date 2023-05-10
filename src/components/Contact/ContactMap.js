import GoogleMapReact from "google-map-react";
import { useEffect } from "react";

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       position: "absolute",
//       width: 20,
//       height: 20,
//       borderRadius: "50%",
//       backgroundColor: "red",
//       border: "2px solid white",
//       textAlign: "center",
//       color: "white",
//       fontSize: 16,
//       fontWeight: "bold",
//       padding: 4,
//       transform: "translate(-50%, -50%)",
//       zIndex: 1,
//     }}
//   >
//     {text}
//   </div>
// );

const MapMarker = ({ lat, lng }) => (
  <div style={{ position: "absolute", transform: "translate(-50%, -100%)" }}>
    <svg
      width="28"
      height="40"
      viewBox="0 0 28 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 40C14 40 28 25.7188 28 14C28 6.26522 21.7348 0 14 0C6.26522 0 0 6.26522 0 14C0 25.7188 14 40 14 40Z"
        fill="#D23F31"
      />
      <circle cx="14" cy="14" r="9" fill="#FFFFFF" />
      <circle cx="14" cy="14" r="3" fill="#D23F31" />
    </svg>
  </div>
);

const ContactMap = ({ city }) => {
  // useEffect(() => {
  //   console.log("city: ", city);
  // }, [city]);

  const defaultProps = {
    center: {
      lat: 13.0296,
      lng: 80.17598,
    },
    zoom: 12,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: city.lat, lng: city.lng },
      map,
      title: "Twentyone'st",
    });
    return marker;
  };

  return (
    <>
      <div
        className="row map-location"
        style={{ height: "400px", width: "100%" }}
      >
        {/* <iframe
          src="https://my.atlistmaps.com/map/3979b996-a68a-42f5-8566-9e0c3048ed15?share=true"
          allow="geolocation"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe> */}
        {/* <iframe
          src="http://maps.googleapis.com/maps/api/staticmap?center=-15.800513,-47.91378&zoom=11&size=200x200&sensor=false"
          allow="geolocation"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyACFe2dyb9WOAvp5TTAqnFZpGLVd7wxbq0" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
          center={{
            lat: city.lat,
            lng: city.lng,
          }}
          // onChange={(detail) => console.log("det: ", detail)}
          // onDragEnd={(detail) => console.log("frag: ", detail)}
        >
          <MapMarker lat={city.lat} lng={city.lng} />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default ContactMap;
