import React from 'react';

const WithLoader = Component => ({ loading, ...props }) => (
  <div className="loader">
    { loading ? 'Carregando..' : <Component {...props} />}
  </div>
)

export default WithLoader;