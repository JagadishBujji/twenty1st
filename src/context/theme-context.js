const { createContext, useState } = require("react");

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  // show based on system preference
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    // console.log("toggThem: ", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
