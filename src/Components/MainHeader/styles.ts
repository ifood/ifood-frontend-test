import styled from 'styled-components';

export const Container = styled.div`
grid-area: MH;
background-color: ${props => props.theme.colors.second};
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 10px;
`;

export const Profile = styled.div`
color: ${props => props.theme.colors.white};
text-align: center;
`;
export const Welcome = styled.h3``;
export const Message = styled.span`
font-size: 16px;
`;