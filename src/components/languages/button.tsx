// Dependencies
import { FC, useState, useEffect } from "react";
import i18n from "i18next";

const LanguagesBtn: FC = () => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, []);



  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
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
