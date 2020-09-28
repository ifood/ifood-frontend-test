import React from "react";
import Content from "../Content";
import MainHeader from "../MainHeader";
import { Grid } from "./styles";

const LayoutPage: React.FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Content> {children} </Content>
    </Grid>
  );
};

export default LayoutPage;
