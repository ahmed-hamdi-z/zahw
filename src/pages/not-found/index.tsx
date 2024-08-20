// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className=' flex  flex-col items-center justify-center w-full h-screen text-center '>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link className='mt-3 font-bold ' to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
