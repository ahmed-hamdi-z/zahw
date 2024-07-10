import { FC, useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguagesBtn from "@/components/languages/button";
import {

  AnimatePresence,

  motion,
} from "framer-motion";
import { Link } from "react-router-dom";

const MainNavbar: FC = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-lg text-[#764095] transition-all bg-[#D4D4D4] duration-300 ease-out lg:px-12 ${
        scrolled ? "shadow-xl" : "shadow-none"
      } ${hidden ? "transform -translate-y-full" : "transform translate-y-0"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-20 lg:flex">
          <div>
            <LanguagesBtn />
          </div>
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold w-16 h-16" style={{ color }}>
        <img src="/images/logo.png" />
      </span>
    </div>
  );
};

const Links = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <NavLink href="/">{t("Home")}</NavLink>
      <a href="#about">{t("About")}</a>
      <a href="#services">{t("Services")}</a>
      <NavLink href="/portfolio">{t("Portfolio")}</NavLink>
      <a href="#clients">{t("Clients")}</a>
      <NavLink href="/blog">{t("Blog")}</NavLink>
      <NavLink href="/contact">{t("Contact")}</NavLink>
    </div>
  );
};

const NavLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link to={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </Link>
    </div>
  );
};

const CTAs = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
<Link
  to="/contact"
  className="items-center gap-2 border-2 border-[#764095] px-4 py-2 font-semibold text-[#764095] transition-colors hover:bg-white hover:text-black hidden md:block"
>
  <span>{t("Consultation")}</span>
</Link>
      <Link
        to="/contact"
        className="border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-[#764095] hover:bg-[#764095] hover:text-white"
      >
        {t("Contact")}
      </Link>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-[#D4D4D4]"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-[#D4D4D4] p-6">
              <div
                onClick={() => setOpen(false)}
                className="flex flex-col items-center  gap-3 text-3xl font-semibold"
              >
                <NavLink href="/">{t("Home")}</NavLink>
                <a href="#about">{t("About")}</a>
                <a href="#services">{t("Services")}</a>
                <NavLink href="/portfolio">{t("Portfolio")}</NavLink>
                <a href="#clients">{t("Clients")}</a>
                <NavLink href="/blog">{t("Blog")}</NavLink>
                <NavLink href="/contact">{t("Contact")}</NavLink>
              </div>
            </div>
            <div className="flex justify-between bg-[#D4D4D4] p-4">
              <div>
                <LanguagesBtn />
              </div>
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbar;
