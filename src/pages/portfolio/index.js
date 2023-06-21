import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, dataportfolio, introdata } from "../../content_option";
import Typewriter from "typewriter-effect";


export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
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

        <div className="mb-5 po_items_ho">
          <Row>
            <Col lg="6" className="d-flex align-items-center justify-content-center">
              <div className="po_item">
                <img src={dataportfolio[0].img} alt="" className="portfolio-image" />
              </div>
            </Col>
            <Col lg="6" className="text-center align-self-center">
              <div className="content text-left">
              <h2 className="mb-1x">{dataportfolio[0].title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        dataportfolio[0].animated.first,
                        dataportfolio[0].animated.second,
                        dataportfolio[0].animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                    }}
                  />
                </h1>
                <p>{dataportfolio[0].description}</p>
                <a href={dataportfolio[0].link}>view demo</a>
              </div>
            </Col>
          </Row>
        </div>
        <hr className="t_border my-4 ml-0 text-left" />
        <br/>
        <div className="mb-5 po_items_ho">
          <Row>
            <Col lg="6" className="text-center align-self-center">
              <div className="content text-left">
              <h2 className="mb-1x">{dataportfolio[1].title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        dataportfolio[1].animated.first,
                        dataportfolio[1].animated.second,
                        dataportfolio[1].animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                    }}
                  />
                </h1>
                <p>{dataportfolio[1].description}</p>
                <a href={dataportfolio[1].link}>view project</a>
              </div>
            </Col>
            <Col lg="6" className="d-flex align-items-center justify-content-center">
              <div className="po_item">
                <img src={dataportfolio[1].img} alt="" className="portfolio-image" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-5 po_items_ho">
          <Row>
            <Col lg="6" className="d-flex align-items-center justify-content-center">
              <div className="po_item">
                <img src={dataportfolio[2].img} alt="" className="portfolio-image" />
              </div>
            </Col>
            <Col lg="6" className="text-center align-self-center">
              <div className="content text-left">
              <h2 className="mb-1x">{dataportfolio[2].title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        dataportfolio[2].animated.first,
                        dataportfolio[2].animated.second,
                        dataportfolio[2].animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                    }}
                  />
                </h1>
                <p>{dataportfolio[2].description}</p>
                <a href={dataportfolio[2].link}>view project</a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mb-5 po_items_ho">
          <Row>
            <Col lg="6" className="text-center align-self-center">
              <div className="content text-left">
              <h2 className="mb-1x">{dataportfolio[3].title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        dataportfolio[3].animated.first,
                        dataportfolio[3].animated.second,
                        dataportfolio[3].animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                    }}
                  />
                </h1>
                <p>{dataportfolio[3].description}</p>
                <a href={dataportfolio[3].link}>view project</a>
              </div>
            </Col>
            <Col lg="6" className="d-flex align-items-center justify-content-center">
              <div className="po_item">
                <img src={dataportfolio[3].img} alt="" className="portfolio-image" />
              </div>
            </Col>
          </Row>
        </div>
        <hr className="t_border my-4 ml-0 text-left" />
        <br/>
        <div className="mb-5 po_items_ho">
          <Row>
            <Col lg="6" className="d-flex align-items-center justify-content-center">
              <div className="po_item">
                <img src={dataportfolio[4].img} alt="" className="portfolio-image" />
              </div>
            </Col>
            <Col lg="6" className="text-center align-self-center">
              <div className="content text-left">
              <h2 className="mb-1x">{dataportfolio[4].title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        dataportfolio[4].animated.first,
                        dataportfolio[4].animated.second,
                        dataportfolio[4].animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 40,
                    }}
                  />
                </h1>
                <p>{dataportfolio[4].description}</p>
                <a href={dataportfolio[4].link}>view project</a>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </HelmetProvider>
  );
};
