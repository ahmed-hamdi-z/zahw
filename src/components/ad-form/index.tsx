import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Dropdown from "../dropdown/dropdown";

const ContactAd: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Selected Option:', selectedOption);

    if (form.current) {
      emailjs
        .sendForm(
          "service_tc9dusc",
          "template_4qrvjnp",
          form.current,
          "OT9OR1z7XDM1I2qYe"
        )
        .then(
          () => {
            setIsSuccess(true);
            setPopupMessage("SUCCESS!");
            setTimeout(() => setPopupMessage(null), 3000); // Hide the popup after 3 seconds
            form.current?.reset(); // Optionally reset the form fields
          },
          (error) => {
            setIsSuccess(false);
            setPopupMessage("FAILED...");
            setTimeout(() => setPopupMessage(null), 3000); // Hide the popup after 3 seconds
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="w-full flex items-center justify-start pr-5">
      <form onSubmit={sendEmail} className=" md:w-6/12 w-5/6 mt-5">
      <div className="mb-4">
          <label className="mb-1 inline-block text-sm font-medium">
            {t("phone number")}
            <span className="text-red-600">*</span>
          </label>
          <input
            id="Mobile-number-input"
            type="number"
            placeholder={t("phone number")}
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]"
            required
          />

        </div>
        <div className="mb-2">
          <label className="mb-1 inline-block text-sm font-medium">
            {t("full name")}
            <span className="text-red-600">*</span>
          </label>
          <input
            id="name-input"
            name="user_name"
            type="text"
            placeholder={t("full name")}
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]"
            required
          />
        </div>
        <div className="mb-2">
          <label className="mb-1 inline-block text-sm font-medium">
            {t("المدينة")}
            <span className="text-red-600">*</span>
          </label>
          <input
            id="name-input"
            name="city"
            type="text"
            placeholder={t("المدينة")}
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]"
            required
          />
        </div>
        <div className="mb-2">
          <label className="mb-1 inline-block text-sm font-medium">
            {t("Services")}
            <span className="text-red-600">*</span>
          </label>
         <Dropdown
      
        options={['أختر خدمة','خدمات التشييد والبناء', 'خدمات التصميم الداخلي', 'خدمات التشطيب والديكور', 'خدمات التأثيث', 'خدمة حلول البناء المستدامة']}
        value={selectedOption}
        onChange={handleDropdownChange}
      />
        </div>
        

        <div className="mb-4 flex w-full items-start gap-1.5"></div>
        <input
            className="border-2 px-3 py-0.5  font-semibold border-[#764095] bg-[#764095] text-[#fff] transition-colors hover:bg-white hover:text-[#764095] text-xl "
            type="submit"
            value={t("Send")}
          />
      </form>

      {popupMessage && (
        <div
          className={`fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ContactAd;
