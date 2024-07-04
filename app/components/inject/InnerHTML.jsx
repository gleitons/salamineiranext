import React from 'react';
import DOMPurify from 'dompurify';

const InnerHTML = ({ htmlContent }) => {
  return (
    <div>
      {htmlContent.map((htmlContent, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }} />
      ))}
    </div>
  );
};

export default InnerHTML;
