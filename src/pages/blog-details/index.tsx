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

  const phoneNumber = '0580711580'; 

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
    <div className="w-full">
      <div className="max-w-4xl mx-auto p-4 text-center mt-16">
        <h1 className="text-3xl font-bold mb-4">{t(post.title)}</h1>
        <img
          src={post.imgUrl}
          alt=""
          className="w-full xl:h-[90vh] md:h-[90vh] h-[50vh] rounded-lg mb-4"
        />
        <p className="text-gray-800 text-justify tracking-tight">
          {t(post.description)}
        </p>

        <div className="max-w-4xl mx-auto p-4 mt-10">
          <ul className="flex flex-row  gap-1 w-auto h-auto items-center justify-center ">
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="">
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
              <Link  to={`tel:${phoneNumber}`}>
                {" "} 
                <FaPhone />
              </Link>
            </li>
            <li className=" w-16 h-12 text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="info@zahw-sa.com">
                {" "}
                <MdOutlineEmail />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex max-w-9xl mx-auto justify-center mt-10"></div>
        <div className=" max-w-6xl mx-auto rtl:text-start">
          <Blog />
        </div>

        <div className="flex items-center justify-center pb-4 pt-20 md:py-20  rtl:text-start">
          <div className="mx-auto my-auto w-full max-w-8xl px-4 md:pr-0">
            <h1 className="mb-3 text-center text-4xl font-semibold text-[#764095]">
              {t("Commint")}
            </h1>

            <form
              onSubmit={sendEmail}
              className="w-8xl rtl:text-start ltr:text-start "
            >
              <div className="mb-2 w-8xl ">
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

              <div className="mb-2 max-w-8xl">
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

              <div className="mb-4 w-8xl">
                <label className="mb-1 inline-block text-sm font-medium mt-2">
                  {t("Message")} <span className="text-red-600">*</span>
                </label>
                <input
                  id="message"
                  name="message"
                  type="text"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
