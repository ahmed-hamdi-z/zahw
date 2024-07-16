// src/components/HeadingSeparator.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
interface HeadingSeparatorProps {
  title: string;
}

const HeadingSeparator: React.FC<HeadingSeparatorProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center my-16 rtl:font-bien">
      {/* <div className="flex-grow h-[1px] bg-gradient-to-r from-[#764095] to-transparent animate-pulse"></div> */}
    
      <span className="flex-shrink flex-row flex items-center md:text-5xl xl:text-5xl text-4xl font-bold text-[#764095]">
      
        {t(title)}
      </span>

          {/* <div className="flex-grow h-[1px] bg-gradient-to-l from-[#764095] to-transparent animate-pulse"></div> */}
    </div>
  );
};

export default HeadingSeparator;
