import React from "react";
import Layout from "../layout/Layout";
import Cursor from "../shared/cursor/Cursor";
import Experience from "../shared/experience/Experience";

const ExperiencePage = () => {
  return (
    <Cursor>
      <Layout active="experience">
        <Experience />
      </Layout>
    </Cursor>
  );
};

export default ExperiencePage;
