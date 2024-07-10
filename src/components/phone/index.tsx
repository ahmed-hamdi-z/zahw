import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Phone: React.FC = () => {
  const phoneNumber = '0580711580'; 

  return (
    <div className="flex items-center justify-center fixed bottom-20 left-4 w-14 h-14 bg-[#764095] text-white rounded-full z-50">
      <Link to={`tel:${phoneNumber}`}>
        <FaPhoneAlt />
      </Link>
    </div>
  );
};

export default Phone;