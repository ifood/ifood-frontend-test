import React, { useLayoutEffect, useState } from "react";
import Layout from "../../components/Layout";
import PlayListInput from "./components/PlaylistInput";
import { PlayListContainer } from "./styles";
import useFilters from "../../hooks/useFilters";
import { Filter } from "../../interfaces/Filter";

const PlayListsPage = () => {

  const { getFilters, setIsLoading } = useFilters();
  const [filters, setFilters] = useState<Filter[]>([]);

  useLayoutEffect(() => {
    const loadFilters = async () => {
      setIsLoading(true);
      const response = await getFilters();
      setFilters(response);
    }

    loadFilters()
      .finally(() => setIsLoading(false));
  }, [getFilters]);

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
