import React from "react";
import { authorize } from "services/api";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { ReactComponent as Logo } from "assets/white-logo.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__dialog" role="region">
        <div className="landing__logo">
          <Logo />
        </div>
        <h1 className="landing__message">
          Precisamos de sua permissão para acessar suas playlists
        </h1>
        <Button
          onClick={() => authorize()}
          kind={KIND.secondary}
          size={SIZE.large}
          shape={SHAPE.pill}
        >
          Autorizar no Spotify.com
        </Button>
      </div>
    </div>
  );
}
