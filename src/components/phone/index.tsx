import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Phone: React.FC = () => {
  const phoneNumber = '00966580711580'; 

  return (
    <div className="flex items-center justify-center fixed bottom-20 left-4 w-14 h-14 bg-[#764095] text-white rounded-full z-50">
      <Link to={`tel:${phoneNumber}`}>
        <FaPhoneAlt  className="text-white w-6 h-7" />
      </Link>
    </div>
  );
};

export default Phone;