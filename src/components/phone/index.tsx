import React from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Phone: React.FC = () => {
  const phoneNumber = '00966580711580'; 

  return (
    <div className="flex items-center justify-center fixed bottom-20 left-4 w-14 h-14 bg-[#764095] text-white rounded-full z-50">
      <Link to={`tel:${phoneNumber}`}>
        <LuPhoneCall  className="text-white w-9 h-9" />
      </Link>
    </div>
  );
};

export default Phone;