import React, { useState } from "react";
import "./InfoHeader.css";
import { Grid, Card, CardActionArea, CardContent } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#f7f7f7",
  },
}));

function InfoHeader() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Card className={classes.color}>
          <CardActionArea>
            <CardContent>
              <div className="header__top">
                <div>
                  <h3>Patient Information</h3>
                </div>
                <div className="header__topRight">
                  <p>Last Updated: 10:25 AM, today</p>
                  <MoreHoriz />
                </div>
              </div>
            </CardContent>
            <CardContent>
              <div className="header__info">
                <img src="images/sara-info.png" alt="" />

                <div className="personal__info">
                  <h3>Sara Smith</h3>
                  <div className="info__container">
                    <div className="info__flex">
                      <div className="block__title">
                        <p>Phone :</p>
                        <p>Email :</p>
                        <p>Gender :</p>
                        <p>Age :</p>
                      </div>
                      <div className="block__info">
                        <p>302-857-9685</p>
                        <p>sarasmith@gmail.com</p>
                        <p>Female</p>
                        <p>45</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="info__flex">
                      <div className="block__title">
                        <p>Surgery Type :</p>
                        <p>Surgery Date :</p>
                        <p>Height (cm) :</p>
                        <p>Weight (lb) :</p>
                        <p>BMI :</p>
                      </div>
                      <div className="block__info">
                        <p>Rotator Cuff Repair</p>
                        <p>15 Aug 2020</p>
                        <p>163</p>
                        <p>110 </p>
                        <p>19</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="info__flex">
                      <div className="block__title">
                        <p>Anesthesiologist :</p>
                        <p>Anesthesiologist Phone :</p>
                        <p>Anesthesiologist Email :</p>
                      </div>
                      <div className="block__info">
                        <p>Dr. Chritina Hardaway</p>
                        <p>301-896-8745</p>
                        <p>christina@h3a.com</p>
                      </div>
                    </div>
                    {/*  */}
                    <div className="last__column">
                      <p>Surgery Chances</p>
                      <img src="/images/yes-symbol.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default InfoHeader;
