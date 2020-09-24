import React from "react";
import {
  Container,
  Grid,
  GridItem,
  ProfileImg,
  Name,
  LiteralNumber,
} from "./styles";

const Header = (props) => {
  return (
    <Container>
      <Grid>
        <ProfileImg src={props.user.images[0].url} alt={"Profile picture"} />
        <GridItem>
          <Name>
            {props.user.display_name}
            <span>({props.user.product})</span>
          </Name>
          <div style={{ display: "flex" }}>
            <LiteralNumber>{props.user.followers.total}</LiteralNumber>
            <span style={{ marginLeft: "8px" }}>Followers</span>
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Header;
