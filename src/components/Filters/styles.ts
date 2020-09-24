import styled from 'styled-components';

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15px;

  @media (max-width: 670px) {
    input,
    select {
      width: 100%;
      margin: 0;
    }
  }

  input,
  select {
    height: 70px;
    padding: 0 18px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    font-family: 'Saira', sans-serif;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
    margin: 0 5px 10px;

    &::placeholder {
      color: #a8a8b3;
      letter-spacing: 0;
      font-size: 25px;
    }
  }

  select {
    min-width: 306px;
    background: #fff;
  }
`;
