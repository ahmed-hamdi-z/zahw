import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeadingSeparatorProps {
  title: string;
}

const HeadingSeparator: React.FC<HeadingSeparatorProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center my-16 rtl:font-bien">
      <span className="md:text-5xl xl:text-5xl text-4xl font-bold text-[#764095] text-center">
        {t(title)}
      </span>
      <div className="flex items-center w-40">
        <div className="flex-grow h-[1px] bg-gradient-to-r from-[#764095] to-transparent animate-pulse"></div>
        <img src="/images/shap.png" className="w-10 h-10" />
        <div className="flex-grow h-[1px] bg-gradient-to-l from-[#764095] to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeadingSeparator;
