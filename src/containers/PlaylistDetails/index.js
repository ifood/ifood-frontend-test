import React, { useState, useEffect } from "react";
import { getPlaylistTracks } from "services/api";

export default function PlaylistDetails({ match }) {
  const [details, setDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadDetails = async () => {
    try {
      setLoading(true);
      const { data } = await getPlaylistTracks(match.params.id);
      console.log(data);
    } catch (e) {
      console.log(e);
      // TODO: Show error message on screen
    }
    setLoading(false);
  };

  useEffect(() => {
    loadDetails();
  }, []);
  return <div className="playlist-details"></div>;
}
