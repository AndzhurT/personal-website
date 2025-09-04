import React from "react";
import Layout from "../layout/Layout";
import Cursor from "../shared/cursor/Cursor";

const WorkPage = () => {
  return (
    <Cursor>
      <Layout active="work">
        <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-primary)' }}>
          <h1>Work Portfolio</h1>
          <p>Coming soon...</p>
        </div>
      </Layout>
    </Cursor>
  );
};

export default WorkPage;
