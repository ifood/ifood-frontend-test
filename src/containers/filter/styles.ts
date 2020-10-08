import styled from 'styled-components';
import breakpoints from 'common/breakpoints';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5ecff;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  margin-top: 20px;

  @media (${breakpoints.LARGE}) {
    width: 800px;
  }
`;
