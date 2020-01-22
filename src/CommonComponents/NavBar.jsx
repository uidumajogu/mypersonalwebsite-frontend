import React, { Component } from "react";
import Button from "./Button";

export class NavBar extends Component {
  style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "calc(10px + 3vw) calc(10px + 5vw)"
  };
  render() {
    return (
      <div style={this.style}>
        <img width="6%" src="../assets/logo/logo.svg" alt="Logo" />
        <Button
          buttonLabel="MY PROJECTS"
          color="#1F1F1F"
          fontSize="calc(8px + 0.5vw)"
          fontWeight="500"
          borderRadius="20px"
          padding="calc(5px + 0.5vw) calc(10px + 1vw)"
          backgroundColor="#FFFFFF"
          onClick={navButtonName => this.props.navButtonClicked(navButtonName)}
        />
      </div>
    );
  }
}

export default NavBar;
