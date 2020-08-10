import styled from "styled-components";
import { shade,  } from 'polished';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #ffffff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        
        display: flex;
        align-items: center;
        
        transition: transform 0.2s;
        
        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px)
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong: {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 8px;
            }
        }

        svg {
            margin-left: auto;
            color: #a8a8b3;
        }

    }
`

export const LogInButton = styled.button`
  width: 300px;
  align-self: center;
  border-radius: 30px;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-weight: 500;
  background: #24d15e;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, "#24d15e")};
    transform: scale(1.05);
  }
`
