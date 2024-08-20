import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeadingSeparator from "../heading";
import { t } from "i18next";
import imagesData from "./images.json";

const Clients: FC = () => {
  return (
    <section
      className="bg-white p-3 mt-16 md:w-9/12 w-full flex flex-col"
      id="clients"
    >
      <HeadingSeparator title={t("Clients")} />
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper>
          <LogoItem />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-50%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
      style={{ width: "200%" }} // double the width to accommodate two sets of images
    >
      {children}

    </motion.div>
  );
};

const LogoItem = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(imagesData.images);
  }, []);

  return (
    <div className="flex gap-4">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          className="w-20 h-20 ml-3"
          alt={`Gallery item ${i}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Clients;
