import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.columnMinWidth}, 1fr)
  );
  gap: 1em;
`;

function Grid({ title, items, columnMinWidth = '200px', itemRenderer }) {
  if (items == null || items.length === 0) {
    return null;
  }

  function renderItem(item) {
    if (itemRenderer != null) {
      return itemRenderer(item);
    }
    return null;
  }

  return (
    <>
      {title != null && <h1>{title}</h1>}
      <GridDiv columnMinWidth={columnMinWidth}>{items.map(renderItem)}</GridDiv>
    </>
  );
}

Grid.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  columnMinWidth: PropTypes.string,
  itemRenderer: PropTypes.func.isRequired,
};

export default React.memo(Grid);
