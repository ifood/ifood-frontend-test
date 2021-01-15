import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 90vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 20px;

  .seachMusic {
    margin-top: 30px;
    display: flex;

    button {
      height: 35px;
      width: 40px;
      border: 1px solid #dcdcdc;
      border-left: 0;
      background: #fff;
    }
  }

  .seachSelect {
    width: 200px;
    height: 35px;
    color: #3e3e3e;
    border: 1px solid #dcdcdc;
    font-weight: bold;
    font-size: 15px;
    padding-left: 10px;
  }

  .List {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
  }

  .ListMusic {
    margin-top: 20px;
    width: 200px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 20px;
  }

  .ListTitle {
    display: flex;
    flex-direction: column;
    height: 180px;
    width: 160px;
    align-items: center;
    img {
      height: 200px;
      width: 200px;
    }

    strong {
      margin-top: -25px;
      color: #fff;
    }
  }

  .ListLeft {
    display: flex;
    height: 70px;
    width: 70px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    a {
      color: #ea1d2c;
      margin-right: 3px;
      margin-top: 2px;
    }
  }

  .ListRight {
    display: flex;
    height: 70px;
    width: 70px;
    align-items: center;
    justify-content: center;
    a {
      color: #ea1d2c;
      margin-left: 3px;
      margin-top: 2px;
    }
  }
`;
