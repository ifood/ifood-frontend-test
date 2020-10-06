import React from 'react';

import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="move">
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" />
        </svg>
      </div>
    </div>
  )
};

export default Loader;
