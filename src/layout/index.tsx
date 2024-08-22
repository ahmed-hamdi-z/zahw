// Dependencies
import { FC, lazy, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import i18n from "i18next";
import Cookies from "js-cookie";

// Config
import MainNavbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Details from "@/pages/blog-details";
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
   
    window.document.dir = i18n.dir();

 
  }, [lng, location, navigate]);

  return (
    <main className={`direction-${direction} lang-${language}`}>
      <div>
        <MainNavbar />
      </div>
      <Routes>
      <Route path="/" Component={LayoutStructure } />
          <Route path="/portfolio" Component={Portfolio } />
          <Route path="/blog" Component={Blog } />
          <Route path="/contact" Component={Contact } />
          <Route path="/ad" Component={Ad } />
          <Route path="*" Component={NotFound } />
      </Routes>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
