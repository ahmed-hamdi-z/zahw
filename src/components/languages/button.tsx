// Dependencies
import { FC, useState, useEffect } from "react";
import i18n from "i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LanguagesBtn: FC = () => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);

    // Parse the current path to insert the new language parameter
    const newPath = location.pathname.replace(`/${language}`, `/${newLanguage}`);
    
    // Navigate to the new language path with the same route
    navigate(newPath, { replace: true });
    window.location.reload()
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-[#764095] text-white ml-3 px-2 py-1 overflow-y-hidden"
        onClick={toggleLanguage}
      >
        {language === "en" ? "AR" : "EN"}
      </button>
    </div>
  );
};

export default LanguagesBtn;
