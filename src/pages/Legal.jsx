import { useTranslation } from "react-i18next";
import "./Legal.css";

const Legal = () => {
    const { t } = useTranslation();

    return(
        <div className="legal-container">
            <h1>{t("legalTitle")}</h1>
        <div className="legal-details">
            <p><strong>{t("legalNoticeTitle")}</strong></p>
            <p>{t("legalNoticeText1")}</p>
            <p>{t("legalNoticeText2")}</p>
            <p>{t("legalNoticeText3")}</p>
            <p>{t("legalNoticeText4")}</p>
            <p>{t("legalNoticeText5")}</p>
            <p>{t("legalNoticeText6")}</p>
        </div>
        </div>
    );    
};
export default Legal;