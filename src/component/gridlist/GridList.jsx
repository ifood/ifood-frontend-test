/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridListContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-bottom: 20px;
`;

function GridList(props) {
  const { data, itemRenderer } = props;

  return (
    <GridListContainer>
      {data.map((element) => {
        if (typeof itemRenderer === 'function') {
          return itemRenderer(element);
        }
        return null;
      })}
    </GridListContainer>
  );
}

GridList.defaultProps = {
  data: [],
};

GridList.propTypes = {
  data: PropTypes.array,
  itemRenderer: PropTypes.func,
};

export default GridList;
