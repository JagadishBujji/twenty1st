import { useContext } from "react";
import ServicesListItems from "../components/Serviceslist/ServicesListItems";
import { ThemeContext } from "../context/theme-context";

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <ServicesListItems isDarkMode={isDarkMode} />
    </>
  );
};

export default Services;
