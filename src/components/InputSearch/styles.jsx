import styled from 'styled-components';

const Search = styled.div`
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  display: flex;
  height: 48px;
  margin-bottom: 16px;
  padding: 0 8px;
`;

const Input = styled.input`
  border: none;
  height: 36px;
  padding: 8px;
  width: 100%;

  &::placeholder{
    color: #e6e6e6;
  }
`;

const Icon = styled.span`
  img {
    width: 24px;
  }
`;

export {
  Search,
  Input,
  Icon,
};