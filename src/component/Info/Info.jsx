import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon, Segment } from 'semantic-ui-react';

function Info({ icon, title, info }) {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name={icon} />
        {title}
      </Header>
      <Segment.Inline>{info}</Segment.Inline>
    </Segment>
  );
}

Info.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Info;
