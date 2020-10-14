import styled from 'styled-components';

const Select = styled.select`
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  height: 48px;
  padding: 12px;

  option:first-child{
    color: #e6e6e6;
    display: none;
  } 
`;

export {
  Select,
};
