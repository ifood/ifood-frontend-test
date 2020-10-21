import Styled from "styled-components"

export const Container = Styled.div`
    width: 100%;
    padding-top: 30px;
    display: flex;
    justify-content: center;
`;

export const SliderContainer = Styled.div`
    width: 100%;
`;

export const PlaylistsContainer = Styled.div`
    display: flex;
    width: 100%;
    margin-left ${props => props.margin}px;
`;

export const Playlist = Styled.div`
    margin: 15px;
    cursor: pointer;
`;

export const PlaylistImage = Styled.img`
    height: 250px;
    width: 250px;
`;

export const PlaylistName = Styled.h2`
    text-align: center
`;