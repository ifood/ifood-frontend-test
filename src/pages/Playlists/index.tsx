import React from "react";
import Layout from "../../components/Layout";
import PlayListInput from "./components/PlaylistInput";
import { PlayListContainer } from "./styles";

const PlayListsPage = () => {

  return (
    <Layout>
      <PlayListContainer id='container'>
        <PlayListInput/>
      </PlayListContainer>
    </Layout>
  )
}

export default PlayListsPage;
