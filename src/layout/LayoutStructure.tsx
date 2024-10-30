// Dependencies
import { FC, lazy, useEffect } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

import WhatsAppIcon from "@/components/whatsapp-icon";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import HomeBtn from "@/components/home-btn";

import { useLocation } from "react-router-dom";
import TopButton from "@/components/top-btn";

// Components
const Carousel = lazy(() => import("@/components/carousel"));
const CountUpStats = lazy(() => import("@/components/stats"));
const Services = lazy(() => import("@/components/services"));
const Gallary = lazy(() => import("@/components/gallary"));
const Clients = lazy(() => import("@/components/clients"));
const About = lazy(() => import("@/components/about"));
const Blog = lazy(() => import("@/components/blog"));
const FollowUS = lazy(() => import("@/components/follow"));
const ContactComp = lazy(() => import("@/components/contact"));
const Phone = lazy(() => import("@/components/phone"));

// Pages
const LayoutStructure: FC = () => {
  const imgs = ["/images/bann1.jpg", "/images/bann2.jpg", "/images/bann3.jpg"];
  const { direction, language } = useSelector(
    (state: RootState) => state.settings
  );
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <main className={`main-layout direction-${direction} lang-${language}`}>
        <Row className="main-content">
          <Col xs="12">
            <div className="w-full ">
              <Carousel children={imgs} />
            </div>
          </Col>
          <Col xs="12">
            <CountUpStats />
          </Col>
          <Col xs="12">
            <Services />
          </Col>
          <Col xs="12">
            <Gallary />
          </Col>
          <div className="w-full flex flex-row items-center justify-center overflow-hidden">
            <Clients />
          </div>
          <div className="w-full h-80 flex flex-row items-center justify-center bg-[#D4D4D4]">
            <HomeBtn />
          </div>
          <div className="w-full flex items-center justify-center ">
            <Blog />
          </div>
          <Col xs="12">
            <About />
          </Col>
          <Col xs="12">
            <FollowUS />
          </Col>
          <Col xs="12">
            <ContactComp />
          </Col>
          <Col xs="12">
            <Outlet />
          </Col>
        </Row>
      </main>
      <WhatsAppIcon />
      <Phone />
      <TopButton />
    </>
  );
};

export default LayoutStructure;
