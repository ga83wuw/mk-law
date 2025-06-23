import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Shared components
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import LanguageSwitcher from "./Components/LanguageSwitcher";

// Pages
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";

// New press release pages
import PressRelease23062025 from "./pages/PressRelease23062025";
import PressRelease01042025 from "./pages/PressRelease01042025";

const AppContent = () => {
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
        <Route path="/press/23062025" element={<PressRelease23062025 />} />
        <Route path="/press/01042025" element={<PressRelease01042025 />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const App = () => (
  <I18nextProvider i18n={i18n}>
    <AppContent />
  </I18nextProvider>
);

export default App;
