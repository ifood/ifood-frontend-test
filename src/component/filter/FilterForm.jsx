/* eslint-disable react-hooks/exhaustive-deps, camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DynamicField from '../dynamicfield/DynamicField';

const FilterContainer = styled.div`
  align-items: fle
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 0 16px 0;
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  filterInputs: {
    flex: 1,
    minWidth: 250,
    maxWidth: 250,
    margin: 8,
  },
}));

function FilterForm(props) {
  const { filters, onChange, filterData = {} } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FilterContainer>
        {filters.map((element) => {
          return (
            <DynamicField
              dynamicData={element}
              onChange={onChange}
              className={classes.filterInputs}
              value={filterData[element.id]}
            />
          );
        })}
      </FilterContainer>
    </MuiPickersUtilsProvider>
  );
}

// locale=pt_BR&country=BR&limit=1&offset=1&timestamp=2020-10-06T03%3A00%3A00.000Z

FilterForm.defaultProps = {
  filters: [],
};

FilterForm.propTypes = {
  filters: PropTypes.array,
  filterData: PropTypes.object,
  onChange: PropTypes.func,
};

export default FilterForm;
