import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const TagWrapper = styled.div`
  flex-shrink: 0;
  margin: 5px;
`;

const Tag = ({ id, field, value, onDelete }) => {
  function handleDelete() {
    if (onDelete != null) {
      onDelete(id);
    }
  }

  return (
    <TagWrapper>
      <Button as="div" labelPosition="left">
        <Label basic>
          {field}: {value}
        </Label>
        <Button onClick={handleDelete} icon>
          <Icon name="remove" />
        </Button>
      </Button>
    </TagWrapper>
  );
};

Tag.propTypes = {
  id: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Tag;
