import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormSearch = styled.form``;

export const SearchBar = styled.div`
  display: flex;

  @media (max-width: 430px) {
    input {
      max-width: 200px;
    }
  }

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0px;
    font-family: 'Saira', sans-serif;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;

    &::placeholder {
      color: #a8a8b3;
      letter-spacing: 0;
      font-size: 25px;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    font-family: 'Saira', sans-serif;
    font-size: 20px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
