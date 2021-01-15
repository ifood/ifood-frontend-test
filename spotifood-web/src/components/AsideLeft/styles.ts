import styled from "styled-components";

export const Aside = styled.div`
  aside {
    width: 200px;
    background: linear-gradient(329.54deg, #f5f3f4 0%, #f5f3f4 100%);
    padding: 20px;
    height: 90vh;
  }

  aside div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  aside h2 {
    font-size: 25px;
    font-weight: 700;
    line-height: 35px;
    margin-top: 80px;
    color: #3e3e3e;
  }

  aside footer strong {
    font-weight: 800;
    color: red;
  }

  aside footer span {
    color: #3e3e3e;
  }
`;
