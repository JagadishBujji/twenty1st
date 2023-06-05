import { useState } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactLocation from "../components/Contact/ContactLocation";
import ContactMap from "../components/Contact/ContactMap";
import ContactTitle from "../components/Contact/ContactTitle";

const Contact = () => {
  const [currentCity, setCurrectCity] = useState({
    city: "chennai",
    lat: 13.031557660741473,
    lng: 80.21118112883538,
  });

  return (
    <>
      <ContactTitle />
      <ContactForm />
      <ContactMap city={currentCity} />
      <ContactLocation
        setCurrectCity={setCurrectCity}
        currentCity={currentCity}
      />
    </>
  );
};

export default Contact;
