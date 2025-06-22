import { useTranslation } from "react-i18next";
import "./Expertise.css";

const Expertise = () => {

    const { t } = useTranslation();

    return (
        <div className="expertise-container">
            <h1>{t("expertiseTitle")}</h1>
            <div className="expertise-details">
                <div>
                    <p><strong>{t("expertiseSub1")}</strong></p>
                    <p>{t("expertiseText1")}</p>
                </div>

                <div>
                    <p><strong>{t("expertiseSub2")}</strong></p>
                    <p>{t("expertiseText2")}</p>
                </div>

                <div>
                    <p><strong>{t("expertiseSub3")}</strong></p>
                    <p>{t("expertiseText3")}</p>
                </div>

                <div>
                    <p><strong>{t("expertiseSub4")}</strong></p>
                    <p>{t("expertiseText4")}</p>
                </div>

                <div>
                    <p><strong>{t("expertiseSub5")}</strong></p>
                    <p>{t("expertiseText5")}</p>
                </div>

            </div>
        </div>
    );
};

export default Expertise;
