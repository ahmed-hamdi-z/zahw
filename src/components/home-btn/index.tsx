import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeBtn: FC = () => {
    const { t } = useTranslation();
    return (
      <>
        <div className="flex items-center gap-2 rtl:font-bien z-10">
         
        <Link
          to="/contact"
          className="items-center gap-2 border-2 border-[#764095] z-50 md:text-3xl text-2x1 px-6 py-2 font-semibold text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
        >
          <span>{t("Consultation")}</span>
        </Link>
        <Link
          to="/contact"
          className="border-2 md:text-3xl text-2x1 px-6 py-2 z-50 font-semibold border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
        >
          {t("Get Quotation")}
        </Link>
        
      </div>
       <div className=" absolute left-5 w-96 h-96 bg-card bg-cover bg-center bg-no-repeat">

       </div>
       </>
    );
  };
  export default HomeBtn;