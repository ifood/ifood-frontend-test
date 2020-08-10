import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 80px;
    max-width: 960px;

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
`;
