// Dependencies
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaSnapchat,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer:FC = ()=>{
    const { t } = useTranslation();
    const phoneNumber = '00966580711580'; 

  return (
    <footer className="w-100 h-auto text-center  flex flex-col items-center justify-between  bg-[#D4D4D4] text-[#764095]"> 
       <div className="max-w-4xl mx-auto my-10 ">
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
            <li className=" w-12 h-8 rounded-full text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to={`tel:${phoneNumber}`}>
                {" "}
                <FaPhone />
              </Link>
            </li>
            <li className=" w-12 h-8 rounded-full text-white bg-[#764095]  place-content-center flex items-center cursor-pointer ">
              <Link to="https://info@zahw-sa.com">
                {" "}
                <MdOutlineEmail />
              </Link>
            </li>
          </ul> 
          <h1 className="mt-4" >  {t("All rights reserved")} </h1>
        </div>
   
    </footer>
  )
}

export default Footer;