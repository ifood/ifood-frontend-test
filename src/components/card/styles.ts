import styled from 'styled-components';
import breakpoints from 'common/breakpoints';

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5ecff;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
  flex: 1 0 100%;
  margin: 5px;
  transition: all 0.1s ease-in-out;
  min-width: 200px;
  max-width: 300px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 1px 4px 0px rgba(0, 0, 0, 0.14),
      0px 1px 9px 0px rgba(0, 0, 0, 0.12);
  }

  @media (${breakpoints.MEDIUM}) {
    flex: 1 0 40%;
  }
`;
