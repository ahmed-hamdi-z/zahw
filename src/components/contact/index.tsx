import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className="flex flex-col-reverse md:flex-row  items-center justify-center bg-[#D4D4D4]  ">
      <div className="md:w-1/2 bg-[#fff] mr-5 p-3 my-3 ">
        <h2 className="text-center font-bold text-lg md:text-xl mb-6 text-[#764095] ">
          أرسل لنا إستفسارك الآن وسيتم الرد عليك في أقرب وقت ممكن
        </h2>

        <form className="space-y-4 " ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row md:space-x-4 rtl:text-right">
            <input
              type="number"
              name="user_number"
              placeholder={t("phone number")}
              className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  text-white placeholder:text-white p-3 flex-1 placeholder:rtl:text-right"
              required
            />
            <input
              type="text"
              name="user_name"
              placeholder={t("full name")}
              className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  text-white placeholder:text-white p-3 flex-1 placeholder:rtl:text-right"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="email"
              name="user_email"
              placeholder={t("ُEmail")}
              className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  text-white placeholder:text-white p-3 flex-1 placeholder:rtl:text-right"
            />
            <input
              type="text"
              placeholder={t("City")}
              className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  text-white placeholder:text-white p-3 flex-1  placeholder:rtl:text-right"
            />
          </div>
          <textarea
            placeholder={t("Message")}
            className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  text-white placeholder:text-white p-2 w-full  placeholder:rtl:text-right"
            rows={5}
            name="message"
            required
          />
          <input
            className="text-[#D4D4D4] bg-[#764095] py-2 px-4  "
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
      <div className="md:w-1/4 bg-[#fff] text-[#764095] font-bold md:py-20 p-10 pr-5 text-right mt-3 w-3/4">
  <div className="text-lg mb-1 flex items-center flex-row-reverse ">
    <FaLocationDot className="ml-2 " />
    <h3>العنوان</h3>
  </div>
  <p>الرياض، الياسمين، طريق أنس بن مالك، سكوير 35، الدور الأول مكتب VV</p>

  <div className="text-lg mt-6 mb-1 flex items-center flex-row-reverse ">
    <FaPhone className="ml-2" />
    <h3>الجوال</h3>
  </div>
  <p>+966580711580</p>

  <div className="text-lg mt-6 mb-1 flex items-center flex-row-reverse ">
    <MdOutlineEmail className="ml-2" />
    <h3>البريد الإلكتروني</h3>
  </div>
  <p>info@zahw-sa.com</p>
</div>
    </div>
  );
};

export default ContactComp;
