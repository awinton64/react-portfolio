import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headermain from "../header";
import "./App.css";
import { Container, Col, Row } from 'react-bootstrap';
import { AppProvider } from "../AppContext";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";

export default function App() {
  return (
    <AppProvider>
      <div>
        <Headermain />
        <Home />
        <Portfolio />
        <About />
        <ContactUs />
        <Container className="mt-4 px-2">
          <Row>
            <Col>
              <p className="text-center text-secondary">
                &copy; {new Date().getFullYear()} Andrew Winton. All Rights Reserved.
              </p>
              <p className="text-center text-secondary">
                Made with ❤️.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </AppProvider>
  );
}
