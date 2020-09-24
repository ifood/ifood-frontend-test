import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
display: flex;
align-items:center;
`;

export const ToggleLabel = styled.span`
color: ${props => props.theme.colors.white}`;

export const ThemeSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.on,
        offColor: theme.colors.off,
    })
) <ReactSwitchProps> `
margin: 0 7px;
`;