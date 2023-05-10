import { useState } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactLocation from "../components/Contact/ContactLocation";
import ContactMap from "../components/Contact/ContactMap";
import ContactTitle from "../components/Contact/ContactTitle";

const Contact = () => {
  const [currentCity, setCurrectCity] = useState({
    city: "chennai",
    lat: 13.0296,
    lng: 80.17598,
  });

  return (
    <>
      <ContactTitle />
      <ContactForm />
      <ContactMap city={currentCity} />
      <ContactLocation setCurrectCity={setCurrectCity} />
    </>
  );
};

export default Contact;
