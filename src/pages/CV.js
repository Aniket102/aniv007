// src/pages/CV.js
import React from 'react';

const CV = () => {
    return (
        <div style={{ height: '100vh' }}>
            <iframe
                src="/CV.pdf"  // Put the correct path to your PDF
                width="100%"
                height="100%"
                frameBorder="0"
                title="My CV"
            ></iframe>
        </div>
    );
};

export default CV;
