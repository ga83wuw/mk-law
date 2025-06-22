import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => 
    {
        const { t } = useTranslation();

    return(
        <div className="home-container">
            <h1>{t("homeTitle")}</h1>
        <div className="home-details">
            {/* <p><strong>{t("legalNoticeTitle")}</strong></p> */}
            <p>{t("homeText1")}</p>
            <p>{t("homeText2")}</p>
            <p>{t("homeText3")}</p>
            <p>{t("homeText4")}</p>
            {/* Use dangerouslySetInnerHTML for HTML content */}
            <p dangerouslySetInnerHTML={{ __html: t("homeText5") }} />
            <p>{t("homeText6")}</p>
            <p>{t("homeText7")}</p>
        </div>
        </div>
    );
    }

export default Home;