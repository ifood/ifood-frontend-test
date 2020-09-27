import React from 'react';
import { useHistory } from 'react-router-dom';

import LayoutTemplate from '../../templates/LayoutTemplate';
import Button from '../../components/Button';

import { getSearchParams } from '../../utils/params';

const NotFound = () => {
  const history = useHistory();
  const params = getSearchParams();
  const { code = 404 } = params;

  return (
    <LayoutTemplate>
      <h3>Error {code}</h3>
      <p>An error ocurred. Please try again later.</p>

      <Button value="Back to Home" onClick={() => history.push('/')} />
    </LayoutTemplate>
  );
};

export default NotFound;
