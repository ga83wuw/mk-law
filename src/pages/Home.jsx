import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => 
    {
        const { t } = useTranslation();

    return(
        <div className="home-container">
            <h1>{t("homeTitle")}</h1>
            <h1>{t("homeSubTitle")}</h1>
            <h3>{t("homeChap1")}</h3>
        <div className="home-details">
            {/* <p><strong>{t("legalNoticeTitle")}</strong></p> */}
            <p>{t("homeText1.1")}</p>
            <p>{t("homeText1.2")}</p>
        </div>
            <h3>{t("homeChap2")}</h3>
        <div className="home-details">
            {/* <p><strong>{t("legalNoticeTitle")}</strong></p> */}
            <p>{t("homeText2.1")}</p>
            <p>{t("homeText2.2")}</p>
            <p>{t("homeText2.3")}</p>
            {/* Use dangerouslySetInnerHTML for HTML content */}
            <p dangerouslySetInnerHTML={{ __html: t("homeText2.4") }} />
            <p>{t("homeText2.5")}</p>
        </div>
            <h3>{t("homeChap3")}</h3>
        <div className="home-details">
            {/* <p><strong>{t("legalNoticeTitle")}</strong></p> */}
            <p>{t("homeText3.1")}</p>
            <p>{t("homeText3.2")}</p>
            <p>{t("homeText3.3")}</p>
        </div>
            <h3>{t("homeChap4")}</h3>
        <div className="home-details">
            {/* <p><strong>{t("legalNoticeTitle")}</strong></p> */}
            <p>{t("homeText4.1")}</p>
            <p>{t("homeText4.2")}</p>
            <p>{t("homeText4.3")}</p>
        </div>
        </div>
    );
    }

export default Home;