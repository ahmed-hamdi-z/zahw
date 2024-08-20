// Dependencies
import { FC, lazy, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import i18n from "i18next";
import Cookies from "js-cookie";

// Config
import { CONFIG } from "@/utils/config";

import MainNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Details from "@/pages/blog-details";
import Ad from "@/pages/ad";
import NotFound from "@/pages/not-found";

// Languages
import "@/components/languages/index";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Pages Routes
const LayoutStructure = lazy(() => import("./LayoutStructure"));
const Contact = lazy(() => import("@/pages/contact"));
const Blog = lazy(() => import("@/pages/blog"));
const Portfolio = lazy(() => import("@/pages/portfolio"));

const Layout: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );
  const lng = Cookies.get("i18next") || "ar";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update document direction based on language
    window.document.dir = i18n.dir();

    // If the language in the URL doesn't match the selected language, update the URL
    const pathWithoutLang = location.pathname.replace(/^\/(ar|en)/, '');
    if (!location.pathname.startsWith(`/${lng}`)) {
      navigate(`/${lng}${pathWithoutLang}`, { replace: true });
    }
  }, [lng, location, navigate]);

  return (
    <main className={`direction-${direction} lang-${language}`}>
      <div>
        <MainNavbar />
      </div>
      <Routes>
        <Route path={`/:lng${CONFIG.root_path}`} element={<LayoutStructure />} />
        <Route path={`/:lng${CONFIG.contact_path}`} element={<Contact />} />
        <Route path={`/:lng${CONFIG.blog_path}`} element={<Blog />} />
        <Route path={`/:lng${CONFIG.ad_path}`} element={<Ad />} />
        <Route path={`/:lng${CONFIG.blog_details}`} element={<Details />} />
        <Route path={`/:lng${CONFIG.portfolio_path}`} element={<Portfolio />} />
        <Route path={`${CONFIG.notFound_path}`} element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
