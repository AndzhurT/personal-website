import React from 'react';

const Seo = ({ title }) => {
  const siteTitle = "Andzhur Terminkeev - Software Engineer";
  
  // Simple document title update without external dependencies
  React.useEffect(() => {
    document.title = title ? `${title} | ${siteTitle}` : siteTitle;
  }, [title, siteTitle]);

  return null; // No JSX needed, just side effect
};

export default Seo;