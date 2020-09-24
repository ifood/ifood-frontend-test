import React from "react";
import Content from "../Content";
import LateralMenu from "../LateralMenu";
import MainHeader from "../MainHeader";
import { Grid } from "./styles";

const LayoutPage: React.FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <LateralMenu />
      <Content> {children} </Content>
    </Grid>
  );
};

export default LayoutPage;
