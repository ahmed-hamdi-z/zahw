// Dependencies
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";


const About: FC = () => {

  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust the offset if needed
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <div className="flex flex-col md:flex-row-reverse items-center bg-[#764095] text-white p-6 rounded-lg shadow-lg rtl:text-right" id="about">
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-4xl font-bold mb-1 rtl:font-bien">{t("Zahw")}</h2>
        <p className="text-white rtl:tracking-wide leading-7 text-lg rtl:font-bien">
          {t("about disc")}
        </p>
        <p className="text-white rtl:tracking-wide leading-7 text-lg rtl:font-bien mt-3">
          {t("about disc2")}
        </p>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <video
          src="/images/about.mp4"
          className=" w-full h-auto object-cover"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default About;
