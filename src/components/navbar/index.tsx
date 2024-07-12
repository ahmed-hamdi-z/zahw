import { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguagesBtn from "@/components/languages/button";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MainNavbar: FC = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-2 text-lg text-[#764095] bg-[#fff] shadow-xl ">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-10 lg:flex">
          <Links />
          <div>
            <LanguagesBtn />
          </div>
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
    <div className="flex items-center gap-2">
      <NavLink href="/">{t("Home")}</NavLink>
      <a href="/#about">{t("About")}</a>
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
    <div className="flex items-center gap-2">
      <Link
        to="/contact"
        className="items-center gap-2 border-2 border-[#764095] px-2 py-1 font-semibold text-[#764095] transition-colors hover:bg-[#764095] hover:text-white hidden md:block"
      >
        <span>{t("Consultation")}</span>
      </Link>
      <Link
        to="/contact"
        className="border-2 px-2 py-1 font-semibold border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
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
            <div
              className="flex items-center justify-between p-6"
              onClick={() => setOpen(false)}
            >
              <Logo color="black" />
              <div className="flex bg-[#D4D4D4] p-4">
                <div>
                  <LanguagesBtn />
                </div>
                <CTAs />
              </div>
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-[#D4D4D4] p-6">
              <div
                onClick={() => setOpen(false)}
                className="flex flex-col items-center gap-2 text-3xl font-semibold"
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
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbar;
