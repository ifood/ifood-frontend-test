import styled from 'styled-components'

export const Container = styled.div`
     height: 100vh;
     display:flex;
     justify-content:center;
     align-items:center;
     background:#f5f3f4;

     
     .Login{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
     }
    
      strong{
          color: #3e3e3e; 
      }

     a{
          text-decoration:none;
          color: #1DB954;
          font-size: 16px;
     }

     .ButtonLogin{
          margin-top: 20px;
          display:flex;
          flex-direction:row;
          justify-content:space-evenly;
          align-items:center; 
          height:35px;
          width:150px; 
          border-radius: 16px;
          border: 1px solid #dcdcdc;
     }
       
  
`