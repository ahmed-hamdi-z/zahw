// Dependencies
import { FC, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "@/components/contact-form";
import { Link } from "react-router-dom";


const CountUpStats: FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-between  ">
      <div className="">

      <Link
        to="/contact"
        className="flex items-center my-5 border-2 border-[#764095] text-2xl px-9 py-2 font-semibold text-[#764095] transition-colors hover:bg-white hover:text-black"
      >
        <span>{t("Consultation")}</span>
      </Link>
    <ContactForm />

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-24 md:gap-16 gap-12 text-[#764095]">
        <div className=" ">
          {" "}
          <Stat num={9} suffix="" subheading={t("Years Of Experience")} />
        </div>
        <div className=" ">
          <Stat
            num={125}
            decimals={0}
            suffix=""
            subheading={t("Satisfied Customers")}
          />
        </div>
        <div className=" ">
          <Stat num={150} suffix="" subheading={t("Completed Projects")} />
        </div>
        <div className=" ">
          {" "}
          <Stat num={88} suffix="" subheading={t("Ready Equipment")} />
        </div>
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center ">
      <p className="mb-2 text-center text-5xl font-semibold ">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-neutral-600">{subheading}</p>
    </div>
  );
};

export default CountUpStats;
