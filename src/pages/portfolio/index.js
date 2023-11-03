import React, { useContext } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, dataportfolio } from "../../content_option";
import { AppContext } from "../../AppContext";

export const Portfolio = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <HelmetProvider>
      <Container id="portfolio" className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {dataportfolio.map((item, index) => (
          <div className="mb-5 po_items_ho" key={index}>
            <div className="po_row">
              <Row>
                <Col lg="6" className="d-flex align-items-center justify-content-center">
                  <div className="po_item">
                    <img
                      src={isDarkMode && item.imgDarkMode ? item.imgDarkMode : item.img}
                      alt=""
                      className="portfolio-image"
                      style={{ marginBottom: '10px', width: '100%' }}
                    />
                  </div>
                </Col>
                <Col lg="6" className="text-center align-self-center">
                  <div className="content text-left">
                    <h2 className="mb-1x">{item.title}</h2>
                    <p>{item.description}</p>
                    {index === 0 && (
                      <a href={item.link} className="btn btn-dark" style={{ border: '2px solid white' }}>Play Now</a>
                    )}
                    {index === 1 && (
                      <a href={item.link} className="btn btn-dark" style={{ border: '2px solid white' }}>Leave me a voice messaage</a>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            {index === 0 && <hr className="t_border my-4 ml-0 text-left" />}
            {index === 3 && <hr className="t_border my-4 ml-0 text-left" />}
          </div>
        ))}
        <br />
      </Container>
    </HelmetProvider>
  );
};
