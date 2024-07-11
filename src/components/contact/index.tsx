import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

const ContactComp = () => {
  return (
    <section className="grid min-h-screen grid-cols-1 bg-[#D4D4D4] md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px] mt-16 rtl:text-end">
      <Form />
      <SupplementalContent />
    </section>
  );
};

export default ContactComp;

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
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
              setMessage(t("SUCCESS! Email sent successfully."));
              form.current.reset(); // Reset the form after successful submission
            }
          },
          (error) => {
            setMessage(`${t("FAILED")}... ${error.text}`);
          }
        );
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-3 text-center text-4xl font-semibold text-[#764095]"
        >
          {t("Want to work with us")}
        </motion.h1>

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
              className="w-full rounded border-[1px] border-slate-300 bg-white opacity-75 placeholder:rtl:text-end px-2.5 py-1.5 focus:outline-[#764095]"
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
              className="w-full rounded border-[1px] border-slate-300 bg-white opacity-75 placeholder:rtl:text-end px-2.5 py-1.5 focus:outline-[#764095]"
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
              className="w-full rounded border-[1px] border-slate-300 bg-white opacity-75 placeholder:rtl:text-end px-2.5 py-1.5 focus:outline-[#764095]"
              required
            />

            <label className="mb-1 inline-block text-sm font-medium mt-2">
              {t("Message")} <span className="text-red-600">*</span>
            </label>
            <input
              id="message"
              name="message"
              type="text"
              className="w-full rounded border-[1px] border-slate-300 bg-white opacity-75 placeholder:rtl:text-end px2.5 py-1.5 focus:outline-[#764095] h-40 placeholder:text-ellipsis"
              required
            />
          </motion.div>

          <motion.div
            variants={primaryVariants}
            className="mb-4 flex w-full items-start gap-1.5"
          ></motion.div>
 
          <input
            value={t("Send")}
            type="submit"
            className="mb-1.5 w-full rounded bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          />
        </form>
        {message && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-2">{message}</p>
              <button
                onClick={() => setMessage(null)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                {t("Close")}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SupplementalContent = () => {
  return (
    <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
      <img
        alt="An example image"
        src="/images/45.jpg"
        className="h-full w-full bg-white object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-50"
      />

      <div className="absolute right-2 top-4 z-10">
        <FiArrowUpRight className="rotate-45 text-6xl text-indigo-200 opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};

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
