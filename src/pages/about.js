import React from "react";
import Layout from "../layout/Layout";
import Cursor from "../shared/cursor/Cursor";
import About from "../shared/about/About";

const AboutPage = () => {
  return (
    <Cursor>
      <Layout active="about">
        <About />
      </Layout>
    </Cursor>
  );
};

export default AboutPage;
