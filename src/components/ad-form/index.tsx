import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactAd: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

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
    <div className="w-full flex items-center justify-center">
      <form onSubmit={sendEmail} className="w-6/12">
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
            {t("ُEmail")}
            <span className="text-red-600">*</span>
          </label>
          <input
            id="email-input"
            name="user_email"
            type="email"
            placeholder={t("ُEmail")}
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]"
            required
          />
        </div>

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

          <label className="mb-1 inline-block text-sm font-medium mt-2">
            {t("Message")} <span className="text-red-600">*</span>
          </label>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Enter Your Message"
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095] h-40 placeholder:text-ellipsis"
            required
          />
        </div>

        <div className="mb-4 flex w-full items-start gap-1.5"></div>

        <input
          value={t("Send")}
          type="submit" 
          className="mb-1.5 w-full rounded bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
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
