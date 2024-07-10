import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TiMessages } from "react-icons/ti";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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
            window.location.reload();
          },
          (error) => {
            setIsSuccess(false);
            setPopupMessage("FAILED...");
            console.log("FAILED...", error.text);
            setTimeout(() => setPopupMessage(null), 3000); // Hide the popup after 3 seconds
          }
        );
    }
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-[#764095]  text-white font-bold w-14 h-14 px-[11px] rounded-full focus:outline-none focus:shadow-outline"
        onClick={toggleForm}
      >
        <TiMessages  className='w-8 h-8' />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50" onClick={toggleForm}></div>
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative z-10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl mb-6 text-center text-black">{t("Welcome To Zahw")}</h2>
            <p className="mb-6 text-center text-gray-600">{t("submit form")}</p>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <motion.div variants={primaryVariants} className="mb-2 w-full">
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
              </motion.div>

              <motion.div variants={primaryVariants} className="mb-2 w-full">
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
              </motion.div>

              <motion.div variants={primaryVariants} className="mb-4 w-full">
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
              </motion.div>

              <motion.div variants={primaryVariants} className="mb-4 flex w-full items-start gap-1.5"></motion.div>

              <input
                value={t("Send")}
                type="submit"
                className="mb-1.5 w-full rounded bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
              />
            </form>
          </div>
        </div>
      )}

      {popupMessage && (
        <div className={`fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${isSuccess ? 'bg-[#764095]' : 'bg-red-500'} text-white`}>
          {popupMessage}
        </div>
      )}
    </>
  );
};

export default ContactForm;

const primaryVariants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};
