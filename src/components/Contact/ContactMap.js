const ContactMap = () => {
  return (
    <>
      <div className="row  map-location">
        <iframe
          src="https://my.atlistmaps.com/map/3979b996-a68a-42f5-8566-9e0c3048ed15?share=true"
          allow="geolocation"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default ContactMap;
