import styled from 'styled-components';
import { desktop, mobile } from '../../../services/utils/styles/media-queries';

export const Input = styled.input`
    border: 1px solid #000;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    padding: 4px 0 4px 10px;
    
    ${mobile} {
        width: 96%;
    }

    ${desktop} {
        width: 190px;
    }
`;
