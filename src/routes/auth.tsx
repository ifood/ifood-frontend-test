import React from 'react'; //eslint-disable-line
import { Route, RouteComponentProps, Redirect, RouteProps } from 'react-router-dom';

const AuthRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  let url = window.location.href;

  function hasAcessToken(url: any) {
    //eslint-disable-next-line
    const access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/);

    if (!access_token) {
      return false;
    }

    localStorage.setItem('access_token', access_token[1]);
    return true;
  }

  if (!Component) {
    return null;
  }
  const isLoggedIn = hasAcessToken(url);

  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<{}>) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};
export default AuthRoute;
