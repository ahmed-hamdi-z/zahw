import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../blog/index";
import {
  FaSnapchat,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Blog from "@/components/blog";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { useTranslation } from "react-i18next";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === parseInt(id || "", 10));

  const { t } = useTranslation();

  const phoneNumber = "0580711580";

  if (!post) {
    return <p>Post not found</p>;
  }
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
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="w-full rtl:font-bien ">
      <div className="max-w-4xl mx-auto p-4 text-center mt-16">
        <h1 className="text-3xl font-bold mb-4 text-[#764095]">
          {t(post.title)}
        </h1>
        <img
          src={post.imgUrl}
          alt=""
          className="w-full xl:h-[90vh] md:h-[90vh] h-[50vh] rounded-lg mb-4"
        />
        <p className="text-gray-800 tracking-wide text-xl">{t(post.description)}</p>

        <div className="max-w-4xl mx-auto p-4 mt-10">
          <ul className="flex flex-row  gap-1 w-auto h-auto items-center justify-center ">
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.snapchat.com/add/zahwinterior?share_id=7_pyxZ1f_40&locale=en-US">
                <FaSnapchat />
              </Link>
            </li>
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.instagram.com/zahwcontracting/">
                <FaInstagram />
              </Link>
            </li>
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.tiktok.com/@zahwcontracting">
                <FaTiktok />
              </Link>
            </li>
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://www.linkedin.com/company/zahw-for-engineering-and-contracting/">
                <FaLinkedinIn />
              </Link>
            </li>
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to={`tel:${phoneNumber}`}>
                {" "}
                <FaPhone />
              </Link>
            </li>
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://info@zahw-sa.com">
                {" "}
                <MdOutlineEmail />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center w-full flex-row-reverse mt-10">         <Blog /></div>
       
 
       
        <h1 className="mt-3 text-center text-4xl font-semibold text-[#764095]">
          {t("Commint")}
        </h1>

        <div className="mx-auto xl:w-2/3 md:w-3/4 w-4/5 pt-20 ">
          <div className="w-full">
            <form
              className="flex flex-col gap-2 "
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder={t("full name")}
                className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095] outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder={t("ُEmail")}
                className="bg-[#764095] bg-opacity-80 active:border-2 active:border-[#764095] outline-[#764095] text-white placeholder:text-white p-2.5 mb-2 flex-1 placeholder:rtl:text-right"
              />
              <textarea
                placeholder={t("Commint")}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
