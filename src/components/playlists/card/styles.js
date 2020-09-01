import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin: 10px;
  text-align: center;
  width: 175px;

    &:hover {
      p {
        background: #00bcd44a;
        border-radius: 20px;
        padding: 0 2px;
      }
    }
`;

export const Description = styled.p`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 175px;
`;


export const Banner = styled.img`
  border-radius: 15px 0 20px 10px;
  height: 165px;
  width: 165px;
`;