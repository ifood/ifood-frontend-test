import { ISpotifyUser, ISpotifyRequest, ISpotifyResponse } from "../config/interfaces";
import axios from "axios";

// make a request to the spotify's user api
export const requestSpotifyUser = async (
  token: string | null
): Promise<ISpotifyUser> => {
  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const parsedResponse: ISpotifyUser = response.data;
    return parsedResponse;
  } catch (error) {
    throw Error("Algo deu errado");
  }
};

// makes a request to the featured playlist spotify's api
export const requestSpotifyPlaylist = async (
  data: ISpotifyRequest
): Promise<ISpotifyResponse> => {
  const { country, limit, locale, offset, time, date, token } = data;

  const parsedDate = new Date(date + "T" + time).toISOString();
  const encodedTimeStamp = encodeURI(parsedDate);
  const uriOffset = offset.toString();
  const uriLimit = limit.toString();

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/featured-playlists?country=${country}&locale=${locale.toString()}&timestamp=${encodedTimeStamp}&limit=${uriLimit}&offset=${uriOffset}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const parsedResponse: ISpotifyResponse = response.data;
    return parsedResponse;
  } catch (error) {
    throw Error("Algo deu errado");
  }
};
