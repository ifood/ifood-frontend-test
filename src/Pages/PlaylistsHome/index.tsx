import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { FiSearch } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";

import { useFilter } from "../../Hooks/playlistsHook";
import { useAuth } from "../../Hooks/auth";
import {
  getFeaturePlaylists,
  IPlaylistItem,
} from "../../Services/spotifyService";
import authenticate from "../../Services/authenticateService";

import LayoutPage from "../../Components/LayoutPage";
import {
  Container,
  Content,
  ContentLogin,
  Logo,
  SearchNameForm,
  Title,
  Button, ContainerLogin
} from "./styles";
import PlaylistFilter from "./PlaylistFilters";
import PlaylistCards from "./PlaylistCards";

const PlaylistsHome: React.FC = () => {
  const [initialItems, setInitialItems] = useState<IPlaylistItem[]>([]);
  const [items, setItems] = useState<IPlaylistItem[]>([]);

  const searchName = useRef("");

  const { token } = useAuth();
  const { filter } = useFilter();

  function getFilteredPlaylistItems(playlists: IPlaylistItem[], name: string) {
    let filteredItems = playlists;

    if (name) {
      const regex = new RegExp(`${name}.+$`, "i");

      filteredItems = playlists.filter((item) => {
        return item.name.search(regex) !== -1;
      });
    }

    setItems(filteredItems);
  }

  function handleSearchPlaylistByName(event: ChangeEvent<HTMLInputElement>) {
    searchName.current = event.target.value;

    getFilteredPlaylistItems(initialItems, searchName.current);
  }

  const getPlaylistsItems = useCallback(() => {
    if (token) {
      getFeaturePlaylists(token, filter).then((playlists) => {
        setInitialItems(playlists);
        getFilteredPlaylistItems(playlists, searchName.current);
      });
    }
  }, [token, filter]);

  useEffect(() => {
    getPlaylistsItems();

    const timerID = setInterval(() => {
      getPlaylistsItems();
    }, 30000);

    return () => clearInterval(timerID);
  }, [getPlaylistsItems]);

  return (
    <Container>
      <Content>
        {!token && (
          <ContainerLogin>
            <ContentLogin hasToken={token?.length !== 0}>
              <Logo>
                <FaSpotify size={70} />
              </Logo>
              <Title>Acesse para encontrar as melhores playlists</Title>
              <Button onClick={authenticate}>
                <FaSpotify size={20} /> Conectar com Spotify
              </Button>
            </ContentLogin>
          </ContainerLogin>
        )}

        {token && (
          <LayoutPage>
            <SearchNameForm>
              <FiSearch size={20} />
              <input
                onChange={handleSearchPlaylistByName}
                placeholder="Pesquisar por nome..."
              />
            </SearchNameForm>

            <PlaylistFilter />
            {items && <PlaylistCards items={items} />}
          </LayoutPage>
        )}
      </Content>
    </Container>
  );
};

export default PlaylistsHome;
