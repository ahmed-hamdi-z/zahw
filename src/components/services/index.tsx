// Dependencies
import { FC } from "react";
import AppCards from "./card";
import { useTranslation } from "react-i18next";

const Services: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute right-[630px] mt-[400px] " id="services">
        <h1 className="flex-shrink flex-row flex items-center md:text-6xl xl:text-6xl text-4xl font-bold text-[#fff] tracking-wider">
          {" "}
         {t("Services")}{" "}
        </h1>
      </div>

      <div className="min-h-screen flex justify-center items-center bg-parallex bg-fixed bg-no-repeat bg-cover bg-center mt-20"></div>

      <div className="xl:mt-[-250px] md:mt-[-200px] mt-[-200px] flex items-center justify-center mb-[-60px] ">
        <AppCards />
      </div>
    </>
  );
};

export default Services;
