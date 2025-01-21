import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const [downloadUrl, setDownloadUrl] = useState('');

  // Extract templateData from navigation state
  const { templateData } = location.state || {};

  useEffect(() => {
    if (templateData) {
      // Prepare the downloadable file
      const fileData = new Blob([JSON.stringify(templateData, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(fileData);
      setDownloadUrl(url);
    }
  }, [templateData]);

  return (
    <div>
      <h1>Template Saved Successfully!</h1>
      <p>Your email template has been saved.</p>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="email-template.json"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#FFF',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Download Template
        </a>
      )}
    </div>
  );
};

export default SuccessPage;
