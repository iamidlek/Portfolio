import React from "react";
import RadialBar from "../components/Chart/RadialBar";
import { Grid } from "../components/Layout/Grid";
import { ContentPageContainer } from "../components/Layout/HomePageStyle";

const skill = () => {
  return (
    <ContentPageContainer maxWidth={1024}>
      <Grid>
        <RadialBar />
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
        <div style={{ border: "1px solid red" }}>ssddd</div>
      </Grid>
    </ContentPageContainer>
  );
};

export default skill;
