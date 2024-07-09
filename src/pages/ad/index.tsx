// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

import WhatsAppIcon from "@/components/whatsapp-icon";

// Components

const Clients = lazy(() => import("@/components/clients"));
// const Work = lazy(() => import("@/components/work"));
const Blog = lazy(() => import("@/components/blog"));
const ContactAd = lazy(() => import("@/components/ad-form"));

// Pages

const Ad: FC = () => {
  return (
    <main className="main-layout ">
      <Row className="main-content">
        <Col className="fixed bottom-10 right-10" xs="12">
          <WhatsAppIcon />
        </Col>

        <Col className="bg-parallex w-screen h-screen bg-cover " xs="12"></Col>
        <Col xs="12">
          {" "}
          <Col className="" xs="12">
            <ContactAd />
          </Col>
          <Clients />
        </Col>
        {/* <Col xs="12">
          <Work />
        </Col> */}
        <Col xs="12">
          <Blog />
        </Col>

        <Col xs="12">
          <Outlet />
        </Col>
      </Row>
    </main>
  );
};

export default Ad;
