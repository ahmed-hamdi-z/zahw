// Dependencies
import { FC } from "react";
import { motion } from "framer-motion";

const Clients: FC = () => {
  return (
    <section className="bg-white p-3 mt-16 md:w-9/12 w-full flex " id="clients">
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
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

const LogoItem = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <img src={imgSrc} />
    </a>
  );
};

const LogoItemsBottom = () => (
  <>
    <LogoItem imgSrc="./images/1.jpg" />
    {/* <LogoItem imgSrc="./images/2.png" /> */}
    <LogoItem imgSrc="./images/3.png" />
    <LogoItem imgSrc="./images/4.png" />
    <LogoItem imgSrc="./images/5.png" />
    <LogoItem imgSrc="./images/6.png" />
    <LogoItem imgSrc="./images/7.png" />
    <LogoItem imgSrc="./images/8.png" />
    <LogoItem imgSrc="./images/9.png" />
    <LogoItem imgSrc="./images/10.png" />
    <LogoItem imgSrc="./images/11.png" />
    <LogoItem imgSrc="./images/12.png" />
  </>
);

export default Clients;
