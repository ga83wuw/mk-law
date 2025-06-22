import { useTranslation } from "react-i18next";
import "./Contact.css";

const Contact = () => {

  const { t } = useTranslation();

    return (
      <div className="contact-container">
        
        <h1>{t("contactTitle")}</h1>
        <div className="contact-details">
          <div>
              <p>{t("contactAddress")}</p>
          </div>
          <div>
              <p>{t("contactEmail")}</p>
          </div>
          <div>
              <p>{t("contactPhone")}</p>
          </div>
          <div>
              <p>{t("contactMobile")}</p>
          </div>
          
        </div>
      </div>
    );
};

export default Contact;