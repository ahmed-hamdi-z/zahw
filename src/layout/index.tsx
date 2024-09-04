// Dependencies
import { FC, lazy, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import i18n from "i18next";
import Cookies from "js-cookie";

// Config

const MainNavbar = lazy(() => import("@/components/navbar"));
const Footer =  lazy(() => import("@/components/footer"));


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
const Details = lazy(() => import("@/pages/blog-details"));
const Ad = lazy(() => import("@/pages/ad"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Privacy = lazy(() => import("@/pages/privacy"));



const Layout: FC = () => {
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );
  const lng = Cookies.get("i18next") || "ar";
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lng, location, navigate]);

  return (
    <main className={`direction-${direction} lang-${language}`}>
      <div>
        <MainNavbar />
      </div>
      <Routes>
        <Route path="/" Component={LayoutStructure} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
        <Route path="/ad" Component={Ad} />
        <Route path="*" Component={NotFound} />
        <Route path="/details/:id" Component={Details} />
        <Route path="/ad" Component={Ad} />
        <Route path="/Privacy" Component={Privacy} />
      </Routes>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
