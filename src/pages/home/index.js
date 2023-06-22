import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import headshot from "../../images/headshot.png";
import { Link } from "react-scroll";

export const Home = () => {
  const [isElementVisible, setIsElementVisible] = React.useState(false);
  const homeRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsElementVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home" ref={homeRef}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{
              backgroundImage: `url(${headshot})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                {isElementVisible && (
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                          introdata.animated.fourth,
                          introdata.animated.fifth,
                          introdata.animated.sixth,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 40,
                      }}
                    />
                  </h1>
                )}
                <p className="mb-1x">{introdata.description}</p>
                <br />
                <div className="intro_btn-action pb-5">
                  <div className="row">
                    <div className="col text-center">
                      <Link
                        to="portfolio"
                        className="text_2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <div
                          className="btn btn-dark"
                          style={{ border: "2px solid white" }}
                        >
                          My Portfolio
                        </div>
                      </Link>
                    </div>
                    <div className="col text-center">
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <div
                          className="btn btn-light"
                          style={{ border: "2px solid black" }}
                        >
                          Contact Me
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
