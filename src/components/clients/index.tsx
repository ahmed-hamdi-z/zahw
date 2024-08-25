import { motion } from "framer-motion";
import imagesData from "./images.json";
import { useTranslation } from "react-i18next";
import HeadingSeparator from "../heading";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-4" id="clients">
      <HeadingSeparator title={t("Clients")} />
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          {imagesData.images.map((image, index) => (
            <LogoItem key={index} Icon={image} />
          ))}
        </TranslateWrapper>
        <TranslateWrapper>
          {imagesData.images.map((image, index) => (
            <LogoItem key={index} Icon={image} />
          ))}
        </TranslateWrapper>
        <TranslateWrapper>
          {imagesData.images.map((image, index) => (
            <LogoItem key={index} Icon={image} />
          ))}
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element | JSX.Element[];
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }: { Icon: string }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <img src={Icon} alt="Logo" className="w-full h-full object-contain" />
    </a>
  );
};

export default Clients;
