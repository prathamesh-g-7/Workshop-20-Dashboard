import React from "react";
import "./Header.css";
import { Toolbar, List, Avatar } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__appBar">
        <List component="nav" className="header__list">
          <Toolbar>
            <img src="./nav-logo.png" alt="" className="header__logo" />
          </Toolbar>
          <div className="header__listItem">
            <div className="header__itemContainer active">
              <h5 className="header__navItem">Patients</h5>
            </div>
            <div className="header__itemContainer">
              <h5 className="header__navItem">Calendar</h5>
            </div>
            <div className="header__itemContainer">
              <h5 className="header__navItem">Users</h5>
            </div>
            <div className="header__itemContainer">
              <h5 className="header__navItem">Billing</h5>
            </div>
          </div>
        </List>
        <div className="header__icons">
          <Notifications />
          <Avatar src="https://media.istockphoto.com/photos/closeup-of-a-lonely-retired-man-picture-id152498555?k=20&m=152498555&s=612x612&w=0&h=cli64KDVa_8ANNdsGYXZFSEBMmfVXqNAI0dFV8a0mi4=" />
        </div>
      </div>
    </div>
  );
}

export default Header;
