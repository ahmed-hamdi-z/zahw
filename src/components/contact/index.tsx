import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

import {
  FaSnapchat,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

const ContactComp: React.FC = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

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
            setMessage("تم تسجيل ردكم بنجاح");
            form.current?.reset();
          },
          (error) => {
            setMessage(`FAILED... ${error.text}`);
          }
        );
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row rtl:font-bien  items-center justify-center bg-[#D4D4D4]  ">
      <div className="md:w-1/2 bg-[#fff] md:mr-5 p-3 my-3 rtl:text-right">
        <h2 className="text-center font-bold text-lg md:text-xl mb-6 text-[#764095] ">
          {t(
            "Send us your inquiry now and we will respond to you as quickly as possible"
          )}
        </h2>

        <form className="space-y-4 " ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col-reverse md:flex-row md:space-x-4 rtl:text-right">
            <input
              type="number"
              name="user_number"
              placeholder={t("phone number")}
              className="bg-[#764095] no-spin bg-opacity-80  outline-[#764095]  text-white placeholder:text-white p-3 mb-2 flex-1 placeholder:rtl:text-right"
              required
            />
            <input
              type="text"
              name="user_name"
              placeholder={t("full name")}
              className="bg-[#764095] bg-opacity-80  outline-[#764095]  text-white placeholder:text-white p-3 mb-2 flex-1 rtl:text-right"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 ">
            <input
              type="email"
              name="user_email"
              placeholder={t("ُEmail")}
              className="bg-[#764095] bg-opacity-80  outline-[#764095]  text-white placeholder:text-white p-3 mb-2 flex-1 rtl:text-right"
            />
            <input
              type="text"
              placeholder={t("City")}
              className="bg-[#764095] bg-opacity-80  outline-[#764095]  text-white placeholder:text-white p-3 flex-1 mb-2 rtl:text-right"
            />
          </div>
          <textarea
            placeholder={t("Message")}
            className="bg-[#764095] bg-opacity-80  outline-[#764095]  text-white placeholder:text-white p-2 w-full  rtl:text-right"
            rows={5}
            name="message"
            required
          />
          <input
            className="border-2 px-3 py-0.5 font-semibold border-[#764095] bg-[#764095] text-[#fff] transition-colors hover:bg-white hover:text-[#764095] text-xl "
            type="submit"
            value={t("Send")}
          />
        </form>
        {/* Pop-up message */}
        {message && (
          <div className="absolute left-0 right-0  flex items-center justify-center mt-[-300px]">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 h-32 flex flex-col items-center justify-center">
              <button
                onClick={() => setMessage(null)}
                className="relative left-40 top-0 mb-4 font-bold  w-7 h-7 text-black text-3xl z-50"
                aria-label="Close"
              >
                <IoCloseSharp />
              </button>
              <p className="text-lg font-semibold absolute top-3">{message}</p>
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
      <div className="md:w-1/4 w-[90%] bg-[#fff] text-[#764095] font-bold  md:py-10 m-3 text-right">
        <div className="md:p-5 p-3 ">
          <div className="text-lg mb-1 flex items-center flex-row-reverse ">
            <FaLocationDot className="ml-2 " />
            <h3>{t("address")}</h3>
          </div>
          <p> {t("address-contact")}  </p>

          <div className="text-lg mt-6 mb-1 flex items-center flex-row-reverse ">
            <FaPhone className="ml-2" />
            <h3>{t("phon")}</h3>
          </div>
          <a href="tel:+966580711580">+966 580 711 580</a>
          <br />
          <a href="tel:+966594108101" className="mt-[-20px]">
            
            +966 59 410 8101
          </a>
          <div className="text-lg mt-6 mb-1 flex items-center flex-row-reverse ">
            <MdOutlineEmail className="ml-2" />
            <h3>{t("ُEmail")}</h3>
          </div>
          <a href="mailto:info@zahw-sa.com">info@zahw-sa.com </a>
          <br />
          <a href="mailto:digital.marketing@zahw-sa.com" className="mt-[-20px]">
            
            digital.marketing@zahw-sa.com
          </a>
        </div>
        <div className="max-w-4xl mx-auto my-4 ">
          <ul className="flex flex-row  gap-1 w-auto h-auto items-center justify-center ">
            <li className=" w-12 h-8 rounded-full text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.snapchat.com/add/zahwinterior?share_id=7_pyxZ1f_40&locale=en-US">
                <FaSnapchat />
              </Link>
            </li>
            <li className=" w-12 h-8 rounded-full text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.instagram.com/zahwcontracting/">
                <FaInstagram />
              </Link>
            </li>
            <li className=" w-12 h-8 rounded-full text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.tiktok.com/@zahwcontracting">
                <FaTiktok />
              </Link>
            </li>
            <li className=" w-12 h-8 rounded-full text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.linkedin.com/company/zahw-for-engineering-and-contracting/">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
