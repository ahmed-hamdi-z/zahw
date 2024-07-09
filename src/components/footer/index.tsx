// Dependencies
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Footer:FC = ()=>{
    const { t } = useTranslation();

  return (
    <footer className="w-100 h-20 flex items-center justify-center"> 
    <h1 >  {t("All rights reserved")} </h1>
    </footer>
  )
}

export default Footer;