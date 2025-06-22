import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n"; // Import i18n configuration
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import LanguageSwitcher from "./Components/LanguageSwitcher";

const AppContent = () => {
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(true);
  
  return (
    <Router>
      <LanguageSwitcher />
      <Background playStatus={playStatus} setPlayStatus={setPlayStatus} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/press" element={<Press />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

const App = () => (
  <I18nextProvider i18n={i18n}>
    <AppContent />
  </I18nextProvider>
);


export default App
