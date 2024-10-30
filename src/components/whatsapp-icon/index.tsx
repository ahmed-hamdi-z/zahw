import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io5";
const WhatsAppIcon: React.FC = () => {
  const phoneNumber = '966594108101'; 

  return (
    <div className="flex items-center justify-center fixed bottom-4 left-4 w-14 h-14 bg-green-500 rounded-full z-50">
      <Link to={`https://api.whatsapp.com/send/?phone=${phoneNumber}`} target="_blank" rel="noopener noreferrer">
      <IoLogoWhatsapp className='w-10 h-10 text-white font-semibold' />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
