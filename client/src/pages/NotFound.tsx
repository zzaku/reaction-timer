import React from 'react';
import './Pages.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  )
};

export default NotFound;
