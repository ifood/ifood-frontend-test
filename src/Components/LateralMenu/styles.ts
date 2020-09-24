import styled from 'styled-components';

export const Container = styled.div`
grid-area: LM;
background-color: ${props => props.theme.colors.white};
padding-left: 40px;
border-right: 4px solid ${props => props.theme.colors.second};
`;

export const Header = styled.div`
display: flex;
align-items: center;
height: 70px;
`;

export const LogoImg = styled.img`
height:40px;
width:40px;
`;

export const Title = styled.h3`
color: ${props => props.theme.colors.black};
margin-left: 20px;
`;
