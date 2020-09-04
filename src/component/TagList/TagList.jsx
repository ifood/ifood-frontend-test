import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '../Tag';

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function TagList({ title, items, onDeleteTag }) {
  if (items == null || items.length === 0) {
    return null;
  }

  return (
    <>
      {title != null && <span>{title}:</span>}
      <Tags>
        {items.map((item) => {
          const { id, field, value } = item;
          return (
            <Tag
              key={id}
              id={id}
              field={field}
              value={value}
              onDelete={onDeleteTag}
            />
          );
        })}
      </Tags>
    </>
  );
}

TagList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      field: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onDeleteTag: PropTypes.func,
};

export default TagList;
