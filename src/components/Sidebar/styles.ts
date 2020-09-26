import styled from "styled-components";

type PlaylistFiltersContainerProps = {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside<PlaylistFiltersContainerProps>`
  width: 350px;
  height: 70vh;

  background-color: #f3f3f3;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  @media screen and (max-width: 768px) {
    position: absolute;

    top: 0;
    left: 0;
    z-index: 10;

    transition: all 0.3s;
    height: 80%;
    width: 60%;
    transform: ${ ({ isOpen }) => isOpen ? 'translate(0, 0)' : 'translate(-400px, -600px)' };
  }

`;
