import styled from 'styled-components'

export const StyledPlaylistCard = styled.div`
  img {
    width: 100%;
    margin-bottom: 8px;
    box-shadow: 0px 24px 16px -16px rgba(0, 0, 0, 0.4);
    transition: ease 0.2s;
  }

  &:hover img {
    transform: scale(1.02);
  }
`
