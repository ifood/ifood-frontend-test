import Styled from 'styled-components'

export const Container = Styled.div`
    width: 100%;
    margin-top: 15px
`;

export const SearchContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = Styled.input`
    width: 240px;
    height: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
`;

export const Buttom = Styled.div`
    width: 70px;
    height: 15px;
    padding: 10px;
    margin-left: 20px;
    border-radius: 5px;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    cursor: pointer;
`;

export const Text = Styled.p`
    font-size: 18px;
`;

export const Modal = Styled.div`
    display: ${props => props.display ? 'flex' : 'none'};
    padding: 15px;
`;