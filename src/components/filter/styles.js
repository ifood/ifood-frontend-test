import styled from 'styled-components';
import { desktop, mobile } from '../../services/utils/styles/media-queries';

export const Menu = styled.div`
  margin-top: 60px;
`;

export const Search = styled.input`
  border-radius: 20px;
  margin: 10px 0;
  outline: none;
  padding: 5px;
  position: fixed;
  text-align: center;
  top: 10px;
  width: calc(100vw - 30px);
`;

export const Filters = styled.section`
  align-items: center;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  ${mobile} {
    align-items: normal;
    flex-direction: column;
  }

  ${desktop} {
    flex-direction: row;
  }
`;

export const Filter = styled.div`
`;

export const Name = styled.p`
  color: #fff;
  margin: 0 0 5px;
`;

export const ResetButton = styled.button`
  cursor: pointer;
  border-radius: 20px;
  bottom: 40px;
  padding: 15px 10px;
  position: absolute;
`;
