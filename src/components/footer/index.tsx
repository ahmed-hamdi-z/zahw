// Dependencies
import { FC } from "react";
import { useTranslation } from "react-i18next";


const Footer:FC = ()=>{
    const { t } = useTranslation();


  return (
    <footer className="w-100 h-auto text-center text-xl rtl:font-bien flex flex-col items-center justify-between  bg-[#D4D4D4] text-[#764095]"> 
       <div className="max-w-4xl mx-auto my-10 ">

          <h1 className="mt-4" >  {t("All rights reserved")} </h1>
        </div>
   
    </footer>
  )
}

export default Footer;