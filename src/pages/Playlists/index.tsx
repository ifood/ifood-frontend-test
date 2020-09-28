import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import PlayListInput from "./components/PlaylistInput";
import { PlayListContainer } from "./styles";
import { usePlaylists } from "../../hooks/usePlaylists";

const PlayListsPage: React.FC = () => {

  const { playlists } = usePlaylists();

  useEffect(() =>{
    console.log(playlists);
  }, [playlists]);

  return (
    <Layout>
      <>
        <PlayListContainer id='container'>
          <PlayListInput/>
        </PlayListContainer>
      </>
    </Layout>
  )
}

export default PlayListsPage;
