import { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguagesBtn from "@/components/languages/button";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; 

const MainNavbar: FC = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const { t } = useTranslation();

  return (
    <nav
      className="fixed top-0 z-50 w-full text-lg text-[#764095] bg-[#fff] shadow-xl"
      id="nav"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between z-50">
        <div className="inline-flex items-center">
          <Logo />
          <h1 className="font-bold  text-2xl pb-2 rtl:font-bien">
            {t("Zahw")}
          </h1>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:flex-1">
          <Links />
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <LanguagesBtn />
          <CTAs />
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  return (
    <div className="flex items-center ">
      <span className="text-2xl font-bold w-16 h-16" style={{ color }}>
        <a href="/">
          <img src="/images/logo.png" />
        </a>
      </span>
    </div>
  );
};

const Links = () => {
  const { t } = useTranslation();
    const navigate = useNavigate();
    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    console.log(scrollTarget);
    const handleScroll = (id: string, path?: string) => {
      const element = document.getElementById(id);

      if (element) {
        // If the section exists on the current page, scroll to it
        window.scrollTo({
          top: element.offsetTop - 100, // Adjust the offset if needed
          behavior: "smooth",
        });
      } else if (path) {
        // If the section doesn't exist on the current page, navigate to the correct page and store the target section ID
        setScrollTarget(id);
        navigate(path);
      }
    };

  return (
    <div className="flex items-center gap-3 font-semibold rtl:font-bien">
      <button onClick={() => handleScroll("top", "/")}>{t("Home")}</button>
      <button onClick={() => handleScroll("about", "/")}>{t("About")}</button>
      <button onClick={() => handleScroll("services", "/")}>
        {t("Services")}
      </button>
      <Link to="/portfolio">{t("Portfolio")}</Link>
      <button onClick={() => handleScroll("clients", "/")}>
        {t("Clients")}
      </button>
      <Link to="/blog">{t("Blog")}</Link>
      <Link to="/contact">{t("Contact")}</Link>
    </div>
  );
};

const CTAs = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/contact"
        className="items-center gap-2 border-2 rtl:font-bien border-[#764095] px-2 py-1 font-semibold text-[#764095] transition-colors hover:bg-[#764095] hover:text-white hidden md:block"
      >
        <span>{t("Consultation")}</span>
      </Link>
      <Link
        to="/contact"
        className="border-2 px-2 py-1 font-semibold rtl:font-bien border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
      >
        {t("Contact")}
      </Link>
    </div>
  );
};

const MobileMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  console.log(scrollTarget);
  const handleScroll = (id: string, path?: string) => {
    const element = document.getElementById(id);

    if (element) {
      // If the section exists on the current page, scroll to it
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust the offset if needed
        behavior: "smooth",
      });
    } else if (path) {
      // If the section doesn't exist on the current page, navigate to the correct page and store the target section ID
      setScrollTarget(id);
      navigate(path);
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="md:block lg:hidden flex">
      <div className="mx-3">
        <Link
          to="/contact"
          className="md:hidden border-2 px-2 py-1 rtl:font-bien font-semibold border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
        >
          {t("Contact")}
        </Link>
      </div>

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
                <div className="p-1">
                  <LanguagesBtn />
                </div>
                <Link
                  to="/contact"
                  className="border-2 px-2 py-1 font-semibold border-[#764095] text-[#764095] transition-colors hover:bg-[#764095] hover:text-white"
                >
                  {t("Contact")}
                </Link>
              </div>
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-[#D4D4D4] p-6">
              <div
                onClick={() => setOpen(false)}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col rtl:font-bien gap-3 text-3xl font-semibold  text-center ">
                  <button onClick={() => handleScroll("top", "/")}>
                    {t("Home")}
                  </button>
                  <button onClick={() => handleScroll("about", "/")}>
                    {t("About")}
                  </button>
                  <button onClick={() => handleScroll("services", "/")}>
                    {t("Services")}
                  </button>
                  <Link to="/portfolio">{t("Portfolio")}</Link>
                  <button onClick={() => handleScroll("clients", "/")}>
                    {t("Clients")}
                  </button>
                  <Link to="/blog">{t("Blog")}</Link>
                  <Link to="/contact">{t("Contact")}</Link>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbar;
