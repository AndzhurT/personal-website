import React from "react";
import Layout from "../layout/Layout";
import Cursor from "../shared/cursor/Cursor";

const IndexPage = () => {
  return (
    <Cursor>
      <Layout home active="work">
        <div>
          {/* Main content for work/portfolio page can be added here */}
        </div>
      </Layout>
    </Cursor>
  );
};

export default IndexPage;
