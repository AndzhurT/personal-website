import React from "react";
import "./Layout.css";
import "../css/global.css";
import Seo from "../shared/seo/Seo";
import Bio from "../shared/bio/Bio";
import About from "../shared/about/About";
import Header from "../shared/header/Header";
import Socials from "../shared/socials/Socials";
import Navigation from "../shared/navigation/Navigation";

const Layout = ({ children, title, active, home, article }) => {
  return (
    <React.Fragment>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />

      {/* Custom Fonts */}
      <style>
        {`
          @font-face {
            font-family: "air-regular";
            src: url("/static/AirbnbCereal-Book.ttf") format("truetype");
            font-display: swap;
            font-weight: normal;
            font-style: normal;
          }
          
          @font-face {
            font-family: "air-semibold";
            src: url("/static/AirbnbCereal-Medium.ttf") format("truetype");
            font-display: swap;
            font-weight: 500;
            font-style: normal;
          }
          
          @font-face {
            font-family: "air-light";
            src: url("/static/AirbnbCereal-Light.ttf") format("truetype");
            font-display: swap;
            font-weight: 300;
            font-style: normal;
          }
          
          @font-face {
            font-family: "air-bold";
            src: url("/static/AirbnbCereal-Bold.ttf") format("truetype");
            font-display: swap;
            font-weight: 700;
            font-style: normal;
          }
          
          @font-face {
            font-family: "air-extrabold";
            src: url("/static/AirbnbCereal-ExtraBold.ttf") format("truetype");
            font-display: swap;
            font-weight: 800;
            font-style: normal;
          }
          
          @font-face {
            font-family: "air-black";
            src: url("/static/AirbnbCereal-Black.ttf") format("truetype");
            font-display: swap;
            font-weight: 900;
            font-style: normal;
          }
        `}
      </style>

      {!article && <Seo title={title ? title : null} />}

      <div
        className={`layout ${article && "layout_article"}`}
        id={home ? "layout_full" : ""}
      >
        {/* Main Navigation */}
        <Navigation />
        
        <div className="mobile_container">
          <Header />
          <div id="mobile">
            {home ? (
              <>
                <Bio />
                <About />
              </>
            ) : (
              children
            )}
          </div>
          <Socials />
        </div>

        <div className={`container ${home ? 'home-vertical' : ''}`}>
          {home ? (
            <>
              <div className="main main--vertical">
                <section className="hero-full">
                  <Bio active={active} />
                </section>
                <section className="pages_container">
                  <About />
                </section>
              </div>
            </>
          ) : (
            <>
              <div className="fixed">
                <Bio active={active} />
              </div>
              <div className="main">
                <div className="pages_container">
                  {children}
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Fixed Side Elements */}
        <div className="side-element side-element--right">
          <div className="email-link fade-enter-done">
            <a href="mailto:andzhurterminkeev@gmail.com">andzhurterminkeev@gmail.com</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
