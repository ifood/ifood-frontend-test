import React, { memo, useLayoutEffect, useState } from "react";
import useUserInfo from "../../hooks/useUserInfo";
import Header from "../Header";
import PlayListFilters from "../Sidebar";
import { Background } from "../../assets/styles/Background";
import { Content } from "./styled";
import { LinearProgress } from "@material-ui/core";
import useFilters from "../../hooks/useFilters";

type Props = {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  const userInfo = useUserInfo();
  const { isLoading } = useFilters();

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
      { isLoading && (<LinearProgress color="secondary"/>) }
      <Content>
        <PlayListFilters isOpen={ isOpen }/>
        { children }
      </Content>
    </Background>
  );

}

export default memo(Layout);
