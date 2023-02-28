import ContactForm from "../components/Contact/ContactForm";
import ContactLocation from "../components/Contact/ContactLocation";
import ContactMap from "../components/Contact/ContactMap";
import ContactTitle from "../components/Contact/ContactTitle";

const Contact = () => {
  return (
    <>
      <ContactTitle />
      <ContactForm />
      <ContactMap />
      <ContactLocation />
    </>
  );
};

export default Contact;
