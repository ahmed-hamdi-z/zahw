import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
            setMessage("Success! Email sent successfully.");
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
      <div className="md:w-1/2 bg-[#fff] md:mr-5 p-3 my-3 ">
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
              className="bg-[#764095] bg-opacity-80 active:border-2 outline-[#764095]  text-white placeholder:text-white p-3 mb-2 flex-1 placeholder:rtl:text-right"
              required
            />
            <input
              type="text"
              name="user_name"
              placeholder={t("full name")}
              className="bg-[#764095] bg-opacity-80 active:border-2 outline-[#764095]  text-white placeholder:text-white p-3 mb-2 flex-1 placeholder:rtl:text-right"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 ">
            <input
              type="email"
              name="user_email"
              placeholder={t("ُEmail")}
              className="bg-[#764095] bg-opacity-80 active:border-2 outline-[#764095]  text-white placeholder:text-white p-3 mb-2 flex-1 placeholder:rtl:text-right"
            />
            <input
              type="text"
              placeholder={t("City")}
              className="bg-[#764095] bg-opacity-80 active:border-2 outline-[#764095]  text-white placeholder:text-white p-3 flex-1 mb-2 placeholder:rtl:text-right"
            />
          </div>
          <textarea
            placeholder={t("Message")}
            className="bg-[#764095] bg-opacity-80 active:border-2 outline-[#764095]  text-white placeholder:text-white p-2 w-full  placeholder:rtl:text-right"
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
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
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
      <div className="md:w-1/4 bg-[#fff] text-[#764095] font-bold md:py-14 m-3 text-right">
        <div className="md:p-5 p-3 ">
          <div className="text-lg mb-1 flex items-center flex-row-reverse ">
            <FaLocationDot className="ml-2 " />
            <h3>{t("address")}</h3>
          </div>
          <p>الندى سنتر، طريق عثمان بن عفان، حي الندى، الرياض</p>

          <div className="text-lg mt-6 mb-1 flex items-center flex-row-reverse ">
            <FaPhone className="ml-2" />
            <h3>{t("phon")}</h3>
          </div>
          <p>+966580711580</p>

          <div className="text-lg mt-6 mb-1 flex items-center flex-row-reverse ">
            <MdOutlineEmail className="ml-2" />
            <h3> {t("Email")}</h3>
          </div>
          <p>info@zahw-sa.com</p>
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
