import React from "react";
import Header from "../../components/Header";
import useUserInfo from "../../hooks/useUserInfo";
import { PlaylistContainer } from "./styles";

const PlayListsPage: React.FC = () => {

  const userInfo = useUserInfo();

  return (
    <PlaylistContainer>
      <Header userInfo={ userInfo! }/>
    </PlaylistContainer>
  )
}

export default PlayListsPage;
