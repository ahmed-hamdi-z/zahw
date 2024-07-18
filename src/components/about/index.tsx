// Dependencies
import { FC } from "react";
import { useTranslation } from "react-i18next";
const About: FC = () => {
  const { t } = useTranslation();
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
          src="/images/zahw.mp4"
          className=" w-full h-[300px] object-cover"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default About;
