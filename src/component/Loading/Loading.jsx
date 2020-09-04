import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

export default function Loading() {
  return (
    <Dimmer active inverted>
      <Loader inverted>
        <FormattedMessage id="loading" />
      </Loader>
    </Dimmer>
  );
}
