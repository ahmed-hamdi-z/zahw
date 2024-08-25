import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";


const Contact = () => {
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
            form.current;
          },
          (error) => {
            setMessage(`FAILED... ${error.text}`);
          }
        );
    }
  };
  return (
    <div className="bg-[#D4D4D4] ">

    <div className="  mx-auto xl:w-1/3 md:w-3/4 w-4/5 pt-20 rtl:font-bien">
      <div className="flex flex-col items-center justify-center w-full md:w-[40vw] md:m-5 mb-2 " >
        {" "}
        <h3 className="hidden md:block  md:ml-[-10vw] text-[#764095] font-normal text-lg">{t("Want to work with us")}</h3>
        <h1 className="hidden md:block md:ml-[-10vw] mt-3 font-bold text-[#764095] text-xl text-justify">
        {t("We offer you all the options that suit your needs, ready to serve you")}
        </h1>
      </div>

      <div className="w-full  ">
        <form
          className=" flex flex-col gap-2 "
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
            {t("full name")}
          </label>
          <input
            type="text"
            name="user_name"
            placeholder={t("full name")}
            className="bg-[#764095] bg-opacity-80 active:border-0  outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right"
            required
          />
          <label className="mb-1 inline-block text-sm font-medium text-[#764095]">
            {t("phone number")}
          </label>
          <div className="">
            <div className=" flex items-center flex-row-reverse bg-[#764095] px-2 outline-[#764095]">
                <img
                    src="/images/ssa.png"
                    alt="Saudi Arabia"
                    className="w-8 h-6 mr-2"
                />
                <span className="text-white mr-2">+966</span>
                <input
                    type="tel"
                    className="bg-[#764095] bg-opacity-80 active:border-0  outline-none text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right"
                    placeholder={t("phone number")}
                />
            </div>
        </div>

          {/* <input
            type="number"
            name="user_number"
            placeholder={t("phone number")}
            className="bg-[#764095] no-spin bg-opacity-80 active:border-2 active:border-[#764095] outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right"
            required
          /> */}
          <label className=" mb-1 inline-block text-sm font-medium text-[#764095]">
            {t("ُEmail")}
          </label>
          <input
            type="email"
            name="user_email"
            placeholder={t("ُEmail")}
            className="bg-[#764095] bg-opacity-80 active:border-0 outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right"
          />

          <h3 className="ml-3 font-bold text-[#764095]"> {t("Request Type")}</h3>
          <div className="grid grid-cols-2 gap-y-4 mt-2  ">
            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("Quotation")}
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("Visit")}
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full text-sm font-medium text-[#764095] ">
                {t("Talk to Customer Service")}
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("Consultation-con")}{" "}
              </label>
            </div>
          </div>
          {/* <h3 className="my-3 ml-3 font-bold text-[#764095]">
            {t("Preferred Time To Contact")}
          </h3> */}
          {/* <div className="grid grid-cols-2 gap-y-4  mt-2  ">
            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("07:00 AM - 12:00 PM")}
              </label>
            </div> */}

            {/* <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("08:00 PM - 10:00 PM")}
              </label> */}
            {/* </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"
              />
              <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("12:00 PM - 4:00 PM")}
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095]"
              /> */}
              {/* <label className="w-full  text-sm font-medium text-[#764095] ">
                {t("04:00 PM - 08:00 PM")}
              </label>
            </div>
          </div> */}
          <label className="my-3 ml-3 inline-block text-sm font-bold text-[#764095]">
            {t("Notes With The Request")}
          </label>
          <textarea
            placeholder={t("Message")}
            className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095]  outline-[#764095] h-[20vh] text-white placeholder:text-white p-2 w-full  placeholder:rtl:text-right"
            rows={5}
            name="message"
            required
          />
          <input
            className="mt-3 w-full   bg-[#764095] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
            type="submit"
            value={t("Send")}
          />
        </form>
        {/* Pop-up message */}
        {message && (
          <div className="absolute text-[#764095] left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
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
    </div>
          
    </div>
  );
};
export default Contact;
