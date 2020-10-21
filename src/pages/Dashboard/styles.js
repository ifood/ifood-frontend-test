import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 40px 20px;
  min-width: ${(props) => (props.empty ? '980px' : 'initial')};

  .content-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;

    .content-caption {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.3px;
      margin-bottom: 15px;
    }

    .content-items {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 20px;
      grid-auto-rows: auto;
    }
  }

  @media screen and (min-width: 720px) {
    .content-wrapper .content-items {
      max-width: 850px;
    }
  }

  @media screen and (min-width: 920px) {
    .content-wrapper .content-items {
      max-width: 980px;
    }
  }
`;
