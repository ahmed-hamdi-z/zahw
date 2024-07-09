// Dependencies
import { FC } from "react";
import i18n from "i18next";

const LanguagesBtn: FC = () => {
  return (
    <div className=" flex items-center  ">
      <button
        className=" bg-[#764095] text-white  w-10 overflow-y-hidden rounded-lg "
        onClick={() => {
          i18n.changeLanguage("ar");
          window.location.reload();
        }}
      >
        ar
      </button>

      <button
        className="bg-[#764095] text-white w-10 m-2 rounded-lg "
        onClick={() => {
          i18n.changeLanguage("en");
          window.location.reload();
        }}
      >
        en
      </button>
    </div>
  );
};

export default LanguagesBtn;
