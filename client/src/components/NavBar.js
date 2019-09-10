import React from "react";

// import tools
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

// import styles
import {
  StyledNavbar,
  StyledMainMenu,
  StyledListItem
} from "./styles/StyledNavbar";

export default function NavBar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <Header as="h1">Prestine Insurance</Header>
      </div>

      <div className="main-menu">
        <StyledMainMenu>
          <StyledListItem>
            <Link to="/">Home</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/About">About</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/Services">Services</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/Contact">Contact</Link>
          </StyledListItem>
        </StyledMainMenu>
      </div>
    </StyledNavbar>
  );
}
