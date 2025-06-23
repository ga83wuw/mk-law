import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import "./Press.css";

const PressRelease23062025 = () => {
    const { t } = useTranslation();

    return (
        <div className="press-container">
            <h2>{t("pressReleaseTitle23062025")}</h2>
            <div className="press-details">
                <p><Trans i18nKey="pressRelease23062025_Text1" /></p>
                <p><Trans i18nKey="pressRelease23062025_Text2" /></p>
                <p>{t("pressRelease23062025_Text3")}</p>
                <p>{t("pressRelease23062025_Text4")}</p>
            </div>
        </div>
    );
};

export default PressRelease23062025;
