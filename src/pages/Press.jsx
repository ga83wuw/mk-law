import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Press.css";

const Press = () => {
  const { t } = useTranslation();

  return (
    <div className="press-container">
      <h1>{t("pressTitle")}</h1>

      <div className="press-details">
        <p><strong>{t("pressReleaseTitle23062025")}</strong></p>
        <Link to="/press/23062025">
          <button className="press-button">{t("More...")}</button>
        </Link>
      </div>

      <div className="press-details">
        <p><strong>{t("pressReleaseTitle01042025")}</strong></p>
        <Link to="/press/01042025">
          <button className="press-button">{t("More...")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Press;