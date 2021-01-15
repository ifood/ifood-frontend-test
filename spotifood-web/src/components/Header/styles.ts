import styled from "styled-components";


export const Header = styled.div`
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      height: 200px;
      width: 200px;
    }
  }

  .headerImgTitle {
    display: flex;
    flex-direction: row;
  }

  .headerTitle {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 10px;
   
     span{
          font-size:12px;
          color: #3e3e3e;
          align-items:center;
     }

    strong {
      font-size: 20px;
      color: #3e3e3e;
    }
  }

  .headerUser {
    display: flex;
    justify-content: center;
  }

  .headerUserName {
    display: flex;
    justify-content: center;
    height: 25px;
    width: 120px;
    border-radius: 16px;
    border: 1px solid #dcdcdc;
    margin-right: 10px;

    span {
      flex: 1;
      text-align: center;
      color: #ea1d2c;
      font-size: 1rem;
    }
  }

  .headerLogout {
    display: flex;
    height: 25px;
    width: 25px;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    a {
      color: #ea1d2c;
      margin-left: 3px;
      margin-top: 2px;
    }
  }

  .HeaderLine {
    height: 1px;
    width: 100%;
    margin-top: 20px;
    background: #dcdcdc;
  }
`;