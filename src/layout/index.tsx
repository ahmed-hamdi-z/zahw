// Dependencies
import { FC, lazy, useEffect } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

import i18n from "i18next";
import Cookies from "js-cookie";

// Config
import { CONFIG } from "@/utils/config";

import MainNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Details from "@/pages/blog-details";
import Ad from "@/pages/ad";

// Languages
import "@/components/languages/index";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

//Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
const Contact = lazy(() => import("@/pages/contact"));
const Blog = lazy(() => import("@/pages/blog"));
const Portfolio = lazy(() => import("@/pages/portfolio"));


const Layout: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );
  const lng = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18n.dir();

  }, [lng]);
  return (
    <main className={`main-layout direction-${direction} lang-${language}`}>
      <div>
        <MainNavbar />
      </div>
      <Routes>
        <Route path={CONFIG.root_path} element={<LayoutStructure />} />
        <Route path={CONFIG.contact_path} element={<Contact />} />
        <Route path={CONFIG.blog_path} element={<Blog />} />
        <Route path={CONFIG.ad_path} element={<Ad />} />
        <Route path={CONFIG.blog_details} element={<Details />} />
        <Route path={CONFIG.portfolio_path} element={<Portfolio />} />

      </Routes>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
