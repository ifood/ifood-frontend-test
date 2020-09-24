import { useEffect } from "react";
import Spotify from "spotify-web-api-js";
import { useCookies } from "react-cookie";
import { useQuery } from "../../assets/useQuery";
import { ACCESSTOKEN, IDENTIFIER, USER } from "../../assets/constants";

const Login = (props) => {
  const params = useQuery();
  const isLogged = params.get("access_token") ? true : false;
  const accessToken = params.get("access_token");
  const [, setCookie] = useCookies(["cookies"]);
  const spotifyApi = new Spotify();

  useEffect(() => {
    if (isLogged) {
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.getMe().then((data) => {
        setCookie(ACCESSTOKEN, accessToken, { path: "/" });
        setCookie(IDENTIFIER, data.id, { path: "/" });
        setCookie(USER, data, { path: "/" });
        props.history.push({
          pathname: "/home",
        });
      });
    }
  }, [accessToken, isLogged, props, props.history, setCookie, spotifyApi]);

  return null;
};

export default Login;
