// Dependencies
import { FC } from "react";
import AppCards from "./card";
import { useTranslation } from "react-i18next";

const Services: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className={`absolute ${
          i18n.dir() === "rtl" ? "left-[50%]" : "right-[50%]"
        } mt-[350px] transform -translate-x-1/2`}
        id="services"
      ></div>

      <div className="min-h-screen flex justify-center items-center bg-parallex bg-cover bg-center bg-no-repeat mt-20">
        <h1 className="md:text-6xl xl:text-6xl text-5xl text-center font-bold text-white">
          {t("Services")}
        </h1>
      </div>

      <div className="relative xl:mt-[-250px] md:mt-[-200px] mt-[-200px] flex items-center justify-center">
        <AppCards />
      </div>
    </>
  );
};

export default Services;
