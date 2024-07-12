import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeBtn: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center gap-2 ">
        <Link
          to="/contact"
          className="items-center gap-2 border-2 border-[#764095] text-3xl px-6 py-2 font-semibold text-[#764095] transition-colors hover:bg-[#764095] hover:text-white hidden md:block"
        >
          <span>{t("Consultation")}</span>
        </Link>
        <Link
          to="/contact"
          className="border-2 text-3xl px-6 py-2 font-semibold border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
        >
          {t("Contact")}
        </Link>
      </div>
    );
  };
  export default HomeBtn;