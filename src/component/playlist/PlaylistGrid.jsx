/* eslint-disable react-hooks/exhaustive-deps, camelcase */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Accordion,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import GridList from '../gridlist/GridList';
import PlaylistCard from './PlaylistCard';
import { CenteredFlex, LayoutContent } from '../containers/Containers';
import FilterForm from '../filter/FilterForm';
import PlaylistError from './PlaylistError';

const Content = styled(LayoutContent)`
  margin-top: 150px;
`;
const FilterContainer = styled.div`
  display: flex;
  padding-bottom: 16px;
`;
const AccordionContainer = styled.div`
  padding-bottom: 16px;
`;

function itemRenderer(element) {
  return <PlaylistCard playlist={element} />;
}

function PlaylistGrid(props) {
  const {
    data,
    errorMessage,
    filterData,
    filters,
    onChangeFilter,
    title,
  } = props;
  const [filterText, setFilterText] = useState('');
  const [gridData, setGridData] = useState([]);
  const [expandedFilter, setExpandedFilter] = useState(false);

  useEffect(() => {
    setGridData([...data]);
  }, [data]);

  const handleChangeTextFilter = useCallback((element) => {
    setFilterText(element?.target?.value);
  }, []);

  const handleExpandFilter = useCallback(() => {
    setExpandedFilter(!expandedFilter);
  }, [expandedFilter]);

  useEffect(() => {
    const filterValues = data.filter(
      (element) =>
        element.name.toUpperCase().includes(filterText.toUpperCase()) ||
        element.description.toUpperCase().includes(filterText.toUpperCase()),
    );

    setGridData(filterValues);
  }, [filterText]);

  const renderGrid = useMemo(() => {
    if (errorMessage != null) {
      return <PlaylistError error={errorMessage} />;
    }

    if (gridData.length > 0) {
      return (
        <>
          <Typography color="textPrimary" variant="h5" gutterBottom>
            {title}
          </Typography>
          <GridList
            data={gridData}
            itemRenderer={itemRenderer}
            filters={filters}
          />
        </>
      );
    }

    return (
      <CenteredFlex>
        <Typography color="textPrimary" variant="h5" gutterBottom>
          Your search result did not return any playlist
        </Typography>
      </CenteredFlex>
    );
  }, [title, gridData, itemRenderer, filters, errorMessage]);

  return (
    <Content>
      <AccordionContainer>
        <Accordion expanded={expandedFilter}>
          <FilterContainer>
            <TextField
              id="local-filter"
              label="Filter"
              variant="filled"
              onChange={handleChangeTextFilter}
              fullWidth
            />
            <IconButton color="primary" onClick={handleExpandFilter}>
              <FilterList />
            </IconButton>
          </FilterContainer>
          <FilterForm
            filters={filters}
            onChange={onChangeFilter}
            filterData={filterData}
          />
        </Accordion>
      </AccordionContainer>
      {renderGrid}
    </Content>
  );
}

PlaylistGrid.defaultProps = {
  data: [],
};

PlaylistGrid.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  filters: PropTypes.array,
  filterData: PropTypes.object,
  onChangeFilter: PropTypes.func,
};

export default PlaylistGrid;
