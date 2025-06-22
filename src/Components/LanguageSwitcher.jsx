import { useTranslation } from "react-i18next";
import gbFlag from "../assets/gb-flag.png"; 
import grFlag from "../assets/gr-flag.png"; 

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
  
    return (
      <div style={switcherContainer}>
        <button onClick={() => i18n.changeLanguage("en")} style={buttonStyle}>
          <img src={gbFlag} alt="English" style={flagStyle} />
        </button>
        <button onClick={() => i18n.changeLanguage("gr")} style={buttonStyle}>
          <img src={grFlag} alt="Ελληνικά" style={flagStyle} />
        </button>
      </div>
    );
  };
  
  // Styles
  const switcherContainer = {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    gap: "8px",
  };
  
  const flagStyle = {
    width: "30px",
    height: "20px",
    cursor: "pointer",
    borderRadius: "5px",
  };
  
  const buttonStyle = {
    background: "none",
    border: "none",
    padding: "5px",
    cursor: "pointer",
  };
  
  export default LanguageSwitcher;