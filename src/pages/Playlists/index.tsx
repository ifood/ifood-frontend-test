import React from "react";
import Layout from "../../components/Layout";
import PlaylistInput from "./components/PlaylistInput";
import { usePlaylists } from "../../hooks/usePlaylists";
import PlaylistList from "./components/PlaylistList";
import { PlaylistCardListContainer, PlaylistContainer } from "./styles";

const PlayListsPage: React.FC = () => {

  const { playlists } = usePlaylists();

  return (
    <Layout>
      <>
        <PlaylistContainer>
          <PlaylistInput/>
          <PlaylistCardListContainer>
            <PlaylistList playlists={ playlists } />
          </PlaylistCardListContainer>
        </PlaylistContainer>
      </>
    </Layout>
  )
}

export default PlayListsPage;
