import React from 'react';
import { useTranslation } from "react-i18next";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { TbHomeInfinity } from "react-icons/tb";

interface CardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, items, icon }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#764095] text-white xl:w-[500px] w-[320px] xl:ml-10  h-auto p-2 rounded-md ">
          <div className="text-4xl  mx-4 mb-[-30px] ">{icon}</div>
      <div className="flex items-center mb-4">
    
        <h2 className="text-xl font-bold w-full text-center">{t(title)}</h2>
      </div>
      <ul className=" pl-3 ">
        {items.map((item, index) => (
          <li key={index} className= " text-white leading-relaxed text-justify rtl:text-start  ">{t(item)}</li>
        ))}
      </ul>
    </div>
  );
};

const AppCards: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: 'Design services',
      icon: <MdOutlineDesignServices />,
      items: [
        'Interior design',
      ],
    },
    {
      title: 'Construction',
      icon: <BsBuildingsFill />,
      items: [
        'Construction disc'
      ],
    },
    {
      title: 'Finishes',
      icon: <TbHomeInfinity />, 
      items: [
        'Finishes disc',
      ],
    },
    {
      title: 'Interior decorations',
      icon: <SiAltiumdesigner />, 
      items: [
        'Interior decorations disc'
      
      ],
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default AppCards;
