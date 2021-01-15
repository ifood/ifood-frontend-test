import React from "react";

import { Container } from "../../styles/pages/login";
import { FaSpotify } from "react-icons/fa";
const Login: React.FC = () => {
  return (
    <Container>
      <div className="Login">
        <strong>Login com Spodify</strong>
        <a href="http://localhost:8888/login">
          <div className="ButtonLogin">
            Log In
            <FaSpotify size={18} color="#1DB954" />
          </div>
        </a>
      </div>
    </Container>
  );
};

export default Login;
