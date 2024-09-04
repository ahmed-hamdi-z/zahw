import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";

interface CardProps {
  title: string;
  items: string[];
  image: string;
}

const Card: React.FC<CardProps> = ({ title, items, image }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[linear-gradient(0deg,#D4D4D4,#764095)] rtl:font-bien text-white xl:w-[400px] w-full sm:w-[350px] p-4 h-auto shadow-md shadow-[#764095]">
      <div className="mb-2 flex rtl:justify-end justify-start">
        <img src={image} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <div className="flex items-center mb-3 rtl:justify-end justify-start">
        <h2 className="text-2xl font-bold rtl:text-start rtl:font-bien">
          {t(title)}
        </h2>
      </div>
      <ul className="pl-3 space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex rtl:flex-row-reverse leading-snug rtl:justify-start rtl:text-end rtl:font-bien text-start"
          >
            <span className="text-white w-1 m-1 pr-4 rtl:rotate-180">
              <IoIosArrowRoundForward />
            </span>
            {t(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AppCards: React.FC = () => {
  const { i18n } = useTranslation();
  const cards: CardProps[] = [
    {
      title: "Construction Services",
      image: "/images/Building.png",
      items: [
        "Concrete and insulation solutions",
        "Electricity business solutions",
        "Plumbing solutions",
        "Commerce Business Solutions",
        "Ceramic and flooring solutions",
        "Painting business solutions",
        "Cooling systems solutions",
        "Renewable energy systems solutions",
      ],
    },
    {
      title: "Interior Design Services",
      image: "/images/Interior.png",
      items: [
        "Design of residential facades for villas and buildings",
        "Designing commercial facades",
        "Residential interior design for villas and apartments",
        "Interior design for restaurants, cafes and offices",
        "Landscape design",
      ],
    },
  
    {
      title: "Finishing and decoration services",
      image: "/images/Finishing.png",
      items: [
        "GRC Facade Works",
        "Wooden, stone and marble cladding",
        "decoration rules",
        "General paint finishing",
        "Interior wood, marble and porcelain works",
        "mirrors and steel",
        "Wallpaper",
        "Paints, ceilings, walls, etc",
      ],
    },
    {
      title: "Furnishing services",
      image: "/images/Furnishing.png",
      items: [
        "We have customized furnishing",
        "We have customized furnishing2",
        "We have customized furnishing3",
      ],
    },
    {
      title: "Sustainable building solutions service",
      image: "/images/Sustainable.png",
      items: [
        "We have special solutions",
        "Reducing the cost of operation and maintenance",
        "Enhancing quality standards in the building",
      ],
    },
  
  ];

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center p-4 ${
        i18n.dir() === "rtl" ? "rtl" : ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            items={card.items}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AppCards;
