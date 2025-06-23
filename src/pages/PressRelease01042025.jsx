import { useTranslation } from "react-i18next";
import "./Press.css";

const PressRelease01042025 = () => {
    const { t } = useTranslation();

    return (
        <div className="press-container">
            <h2>{t("pressReleaseTitle01042025")}</h2>
            <div className="press-details">
                <p>{t("pressRelease01042025_Text1")}</p>
                <p>{t("pressRelease01042025_Text2")}</p>
                <p>{t("pressRelease01042025_Text3")}</p>
                <p>{t("pressRelease01042025_Text4")}</p>
                <p>{t("pressRelease01042025_Text5")}</p>
                <p>{t("pressRelease01042025_Text6")}</p>
                <p>{t("pressRelease01042025_Text7")}</p>
                <p>{t("pressRelease01042025_Text8")}</p>
                <p>{t("pressRelease01042025_Text9")}</p>
                <p>{t("pressRelease01042025_Text10")}</p>
                <p>{t("pressRelease01042025_Text11")}</p>
                <p>{t("pressRelease01042025_Text12")}</p>
                <p>{t("pressRelease01042025_Text13")}</p>
                <p>{t("pressRelease01042025_Text14")}</p>
                <p>{t("pressRelease01042025_Text15")}</p>
            </div>
        </div>
    );
};

export default PressRelease01042025;
