import styled from 'styled-components';

const LayoutContainer = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 90%;
`;

const LayoutContent = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #0f0f0f;
  height: 100%;
`;

const CenteredFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export { CenteredFlex, LayoutContainer, LayoutContent };
