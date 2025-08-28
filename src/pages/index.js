import React from "react";
import Layout from "../layout/Layout";
import Cursor from "../shared/cursor/Cursor";

const IndexPage = () => {
  return (
    <Cursor>
      <Layout home active="about">
        <div>
          {/* About section will be displayed automatically when home=true */}
        </div>
      </Layout>
    </Cursor>
  );
};

export default IndexPage;
