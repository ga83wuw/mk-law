import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import logo from '../../assets/mk-logo.jpeg'
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const isGreek = i18n.language === "gr";

    return (
        <div className={`nav ${isGreek ? "nav-greek" : ""}`}> {/* Add conditional class */}
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="MK-law Logo" className="logo" />
                </Link>
            </div>
            <ul className="nav-menu">
                <li><Link to="/">{t("home")}</Link></li>
                <li><Link to="/expertise">{t("expertise")}</Link></li>
                <li><Link to="/press">{t("press")}</Link></li>
                <li><Link to="/partners">{t("partners")}</Link></li>
                <li><Link to="/legal">{t("legal")}</Link></li>
                <li><Link to="/contact">{t("contact")}</Link></li>
            </ul>
        
        </div>
    )
}

export default Navbar
