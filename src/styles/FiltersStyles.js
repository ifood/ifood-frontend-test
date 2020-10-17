import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const FiltersContainer = styled.section`
  display: flex;
  justify-content: space-around;
  color: #fff;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterField = styled(TextField)`
  color: #fff;
`;

export { FiltersContainer, FilterField, Filter };
