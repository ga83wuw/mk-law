import { useTranslation } from "react-i18next";
import "./Partners.css";

const Partners = () => {
    const { t } = useTranslation();

    return (
        <div className="partners-container">
            <h1>{t("partnersTitle")}</h1>
            <div className="partners-details">
                {/* First Partner */}
            <div>
                <p><strong>{t("partners1")}</strong></p>
                <p>{t("partnersBio1.1")}</p>
                <p>{t("partnersBio1.2")}</p>
                <p>{t("partnersBio1.3")}</p>
                <p>{t("partnersBio1.4")}</p>
                <p>{t("partnersBio1.5")}</p>
                <p>{t("partnersBio1.6")}</p>
            </div>
            <div>
                {/* Second Partner */}
                <p><strong>{t("partners2")}</strong></p>
                <p>{t("partnersBio2.1")}</p>
                <p>{t("partnersBio2.2")}</p>
                <p>{t("partnersBio2.3")}</p>
                <p>{t("partnersBio2.4")}</p>
            </div>
            </div>
        </div>
    );
};

export default Partners;
