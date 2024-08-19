// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

import About from "@/components/about";
import Gallary from "@/components/gallary";

// Components

const Clients = lazy(() => import("@/components/clients"));
const ContactAd = lazy(() => import("@/components/ad-form"));

// Pages

const Ad: FC = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Row>
        <Col xs="12">
          <div className="w-full h-[60vh] md:h-screen bg-bg-ad bg-cover bg-center bg-no-repeat"></div>
        </Col>
        <Col xs="12">
          <div className="flex flex-row justify-center items-center w-full">
            <div className="mt-3 border-2 border-[#764095] opacity-20 md:w-52 w-24 h-1 "></div>
            <div className="mt-2 px-3">
              {" "}
              <h1 className="md:text-2xl text-xl font-semibold text-[#764095] font-mono">
                صمم عالمك الخاص
              </h1>{" "}
            </div>

            <div className="mt-3 border-2 border-[#764095] opacity-20  md:w-52 w-24 h-1 "></div>
          </div>
        </Col>
        <Col className="" xs="12">
          <ContactAd />
        </Col>
        <Col className="mt-3" xs="12">
          <About />
        </Col>
        <Col xs="12">
          <Gallary />
        </Col>
        <Col className="w-full flex items-center justify-center" xs="12">
          <Clients />
        </Col>
        <Col xs="12">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Ad;
