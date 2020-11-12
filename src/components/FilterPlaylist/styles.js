import styled from 'styled-components';
import { Button, InputGroup } from 'react-bootstrap';
import { gray, green, lightBlack } from '../../styles/colors';

export const Container = styled.div`
  @media only screen and (max-width: 767px) {
    .input-group {
      width: 70% !important;
    }
  }
`;

export const SearchForm = styled(InputGroup)`
  margin: 0px;
  padding: 0px;
`;

export const FilterTitle = styled.p`
  color: ${gray};
  font-weight: bold;
  font-size: 20px;
`;

export const FilterForm = styled.form`
  padding: 20px;
  background-color: ${lightBlack};
  margin-bottom: 20px;
`;

export const FilterButton = styled(Button)`
  background-color: ${green};
  border: 0;
  font-weight: 500;
`;
