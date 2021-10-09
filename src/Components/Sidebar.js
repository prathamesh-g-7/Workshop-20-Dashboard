import React, { useState } from "react";
import "./Sidebar.css";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";
import {
  KeyboardArrowLeft,
  Search,
  FiberManualRecord,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__top">
        <h5>Patients</h5>
        <div className="Sidebar__topArrow">
          <KeyboardArrowLeft />
        </div>
      </div>
      <div className="Sidebar__searchBox">
        <div className="sidebar__searchBoxInput">
          <input type="text" placeholder="Search Patient" />
          <Search />
        </div>
      </div>
      <Grid container spacing={2} className="Sidebar__gridContainer">
        <Grid item xs={11} md={11}>
          <Card>
            <CardActionArea>
              <CardContent className="Sidebar__cardContainer">
                <div className="cardInfo">
                  <Avatar
                    src="/images/sara-smith.png"
                    className="cardInfo__avatar"
                  />
                  <div className="textInfo">
                    <h3>Sara Smith</h3>
                    <h5>15 Aug 2020</h5>
                  </div>
                </div>
                <FiberManualRecord />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={11} md={11}>
          <Card>
            <CardActionArea>
              <CardContent className="Sidebar__cardContainerNormal">
                <div className="cardInfo">
                  <Avatar
                    src="/images/james-johanson.png"
                    className="cardInfo__avatar"
                  />
                  <div className="normalInfo">
                    <h3>James Johnson</h3>
                    <h5>No Clearance</h5>
                  </div>
                </div>
                <FiberManualRecord id="red" />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={11} md={11}>
          <Card>
            <CardActionArea>
              <CardContent className="Sidebar__cardContainerNormal">
                <div className="cardInfo">
                  <Avatar
                    src="/images/patrice-page.png"
                    className="cardInfo__avatar"
                  />
                  <div className="normalInfo">
                    <h3>Patrice Page</h3>
                    <h5>19 Aug 2020</h5>
                  </div>
                </div>
                <FiberManualRecord />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={11} md={11}>
          <Card>
            <CardActionArea>
              <CardContent className="Sidebar__cardContainerNormal">
                <div className="cardInfo">
                  <Avatar
                    src="/images/derek.png"
                    className="cardInfo__avatar"
                  />
                  <div className="normalInfo">
                    <h3>Derek Diamon</h3>
                    <h5>21 Aug 2020</h5>
                  </div>
                </div>
                <FiberManualRecord />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Sidebar;
