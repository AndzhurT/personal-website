import React from "react";
import Layout from "../layout/Layout";
import Cursor from "../shared/cursor/Cursor";

const ContactPage = () => {
  return (
    <Cursor>
      <Layout active="contact">
        <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-primary)' }}>
          <h1>Contact Me</h1>
          <p>Coming soon...</p>
        </div>
      </Layout>
    </Cursor>
  );
};

export default ContactPage;
