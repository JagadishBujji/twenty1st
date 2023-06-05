import GoogleMapReact from "google-map-react";

const MapMarker = ({ lat, lng, text }) => (
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
    <div style={{ fontWeight: "bold" }}>{text}</div>
  </div>
);

const ContactMap = ({ city }) => {
  const defaultProps = {
    center: {
      lat: 13.0296,
      lng: 80.17598,
    },
    zoom: 12,
  };

  // const renderMarkers = (map, maps) => {
  //   let marker = new maps.Marker({
  //     position: { lat: city.lat, lng: city.lng },
  //     map,
  //     title: "Twentyone'st",
  //   });
  //   return marker;
  // };

  return (
    <>
      <div
        className="row map-location"
        style={{ height: "400px", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyACFe2dyb9WOAvp5TTAqnFZpGLVd7wxbq0",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
          center={{
            lat: city.lat,
            lng: city.lng,
          }}
        >
          <MapMarker lat={city.lat} lng={city.lng} text="Twentyone'st" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default ContactMap;
