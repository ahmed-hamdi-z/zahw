import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TiMessages } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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
            if (form.current) {
              setMessage(t("تم تسجيل ردكم بنجاح"));
              form.current.reset(); // Reset the form after successful submission
            }
          },
          (error) => {
            setMessage(`${t("FAILED")}... ${error.text}`);
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
        className="fixed bottom-4 right-4 bg-[#764095] text-white font-bold w-14 h-14 px-[11px] rounded-full focus:outline-none focus:shadow-outline"
        onClick={toggleForm}
      >
        <TiMessages className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-end rtl:justify-start z-50 ">
          <div
            className="fixed inset-0 bg-opacity-50 "
            onClick={toggleForm}
          ></div>
          <div
            className="relative right-5 bg-white shadow-md shadow-[#764095] p-2 md:w-1/4 w-5/6 md:h-[70vh] h-auto z-50  "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl mb-6 text-center text-[#764095]">
              {t("Welcome To Zahw")}
            </h2>
            <p className="mb-6 text-center text-gray-600">{t("submit form")}</p>
            <form ref={form} onSubmit={sendEmail} className="w-full ">
              <motion.div className="mb-2 w-full">
                <input
                  id="name-input"
                  name="user_name"
                  type="text"
                  placeholder={t("full name")}
                  className="w-full  border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095] shadow-md shadow-[#764095]"
                  required
                />
              </motion.div>

              <motion.div variants={primaryVariants} className="mb-2 w-full">
                <input
                  id="email-input"
                  name="user_email"
                  type="email"
                  placeholder={t("ُEmail")}
                  className="w-full  border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095] shadow-md shadow-[#764095]"
                  required
                />
              </motion.div>

              <motion.div variants={primaryVariants} className="mb-4 w-full">
                <input
                  id="Mobile-number-input"
                  type="number"
                  placeholder={t("phone number")}
                  className="w-full  border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095] no-spin shadow-md shadow-[#764095]"
                  required
                />

                <input
                  id="message"
                  name="message"
                  type="text"
                  placeholder={t("Enter Your Message")}
                  className="w-full  border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095] mt-2 h-20 placeholder:text-ellipsis shadow-md shadow-[#764095]"
                  required
                />
              </motion.div>

              <motion.div
                variants={primaryVariants}
                className="flex w-full items-start"
              ></motion.div>

              <input
                value={t("Send")}
                type="submit"
                className="py-1 px-2  bg-[#764095]  text-center font-medium text-white transition-colors hover:bg-[#764095] shadow-md shadow-[#764095]"
              />
            </form>
            {message && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 h-32 flex flex-col items-center justify-center">
                  <button
                    onClick={() => setMessage(null)}
                    className="relative left-40 top-0 mb-4 font-bold  w-7 h-7 text-black text-3xl z-50"
                    aria-label="Close"
                  >
                    <IoCloseSharp />
                  </button>
                  <p className="text-lg font-semibold absolute top-3">
                    {message}
                  </p>
                  <button
                    onClick={() => setMessage(null)}
                    className="bg-[#764095] text-white px-4 py-2 mt-3 hover:bg-indigo-700"
                  >
                    {t("Close")}
                  </button>
                </div>
              </div>
            )}
          </div>
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
