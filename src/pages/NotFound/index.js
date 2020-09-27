import React from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';

import LayoutTemplate from '../../templates/LayoutTemplate';
import Button from '../../components/Button';
import messages from './messages';

import { getSearchParams } from '../../utils/params';

const NotFound = () => {
  const intl = useIntl();
  const history = useHistory();
  const params = getSearchParams();
  const { code = 404 } = params;

  return (
    <LayoutTemplate>
      <h3>
        <FormattedMessage {...messages.error} /> {code}
      </h3>
      <p>
        <FormattedMessage {...messages.message} />
      </p>

      <Button
        value={intl.formatMessage(messages.backButton)}
        onClick={() => history.push('/')}
      />
    </LayoutTemplate>
  );
};

export default NotFound;
