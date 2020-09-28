import styled from 'styled-components';

export const Container = styled.div`

background-color: ${props => props.theme.colors.first} ;
padding: 25px;

height: calc(100vh - 70px); 
overflow-y: scroll;

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.second};
    border-radius: 10px;
}
`;