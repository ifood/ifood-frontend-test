import React from 'react';

import { getSearchParams } from '../../utils/params';

const NotFound = () => {
  const params = getSearchParams();
  const { code = 404 } = params;

  return (
    <>
      <p>Error {code} page</p>
    </>
  );
};

export default NotFound;
