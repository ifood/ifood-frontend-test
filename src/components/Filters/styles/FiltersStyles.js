import styled from 'styled-components';
import { Input } from 'antd';

const FiltersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterField = styled(Input)``;

export { FiltersContainer, FilterField, Filter };
