import React from "react";
import { useAuth } from "../Hooks/auth";
import Login from "../Pages/Login";
import Playlists from "../Pages/Playlists";

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Playlists /> : <Login />;
  
};

export default Routes;
