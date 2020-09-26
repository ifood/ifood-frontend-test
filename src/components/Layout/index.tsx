import React, { memo, useLayoutEffect, useState } from "react";
import useUserInfo from "../../hooks/useUserInfo";
import Header from "../Header";
import PlayListFilters from "../../pages/Playlists/components/PlaylistFilters";
import { Background } from "../../assets/styles/Background";
import { Content } from "./styled";

type Props = {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  const userInfo = useUserInfo();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSidebar = (): void => {
    setIsOpen(!isOpen);
  }

  const closeSidebar = (): void => {
    setIsOpen(false);
  }

  useLayoutEffect(() => {
    const addPlaylistListener = () => {
      const playListContainer = document.getElementById('container');
      playListContainer!.addEventListener('click', closeSidebar);
    }
    addPlaylistListener();
  }, [isOpen])

  return (
    <Background>
      <Header userInfo={ userInfo! } openSidebar={ openSidebar }/>
      <Content>
        <PlayListFilters isOpen={ isOpen }/>
        { children }
      </Content>
    </Background>
  );

}

export default memo(Layout);
