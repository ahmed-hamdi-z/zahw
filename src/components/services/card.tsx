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
    <div className="bg-[#764095] text-white xl:w-[500px] w-full sm:w-[400px] p-4  shadow-md">
      <div className="text-5xl mb-2 flex justify-center">{icon}</div>
      <div className="flex items-center mb-3 justify-center">
        <h2 className="text-2xl font-bold text-center">{t(title)}</h2>
      </div>
      <ul className="pl-3 space-y-2 text-center">
        {items.map((item, index) => (
          <li key={index} className="leading-relaxed rtl:text-end tracking-tighter rtl:tracking-wide">{t(item)}</li>
        ))}
      </ul>
    </div>
  );
};

const AppCards: React.FC = () => {
  const { i18n } = useTranslation();
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
    <div className={`min-h-screen flex flex-col justify-center items-center p-4 ${i18n.dir() === 'rtl' ? 'rtl' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default AppCards;
