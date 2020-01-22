import React, { Component } from "react";
import "./Header.css";
import NavBar from "../../../../CommonComponents/NavBar";
import Button from "../../../../CommonComponents/Button";
import Gap from "../../../../CommonComponents/Gap";

export class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <div>
          <NavBar />
          <div className="HeaderBody">
            <div>
              {/* <h3>My name is</h3> */}
              <h1>UNEKU IDUMAJOGU</h1>
              <div>
                <p>I develop mobile and web applications</p>
                <Button
                  buttonLabel="MORE ABOUT ME"
                  color="#1F1F1F"
                  fontSize="calc(8px + 0.5vw)"
                  fontWeight="500"
                  borderRadius="20px"
                  padding="calc(5px + 0.5vw) calc(10px + 1vw)"
                  backgroundColor="#FCCA3F"
                  onClick={moreAboutMeButtonLabel =>
                    this.props.moreAboutMeButtonClicked(moreAboutMeButtonLabel)
                  }
                />

                <div>
                  <img
                    width="40%"
                    src="../assets/icons/github_icon.svg"
                    alt="github icon"
                  />
                  <Gap value="calc(10px + 1vw)" />
                  <img
                    width="40%"
                    src="../assets/icons/linkedin_icon.svg"
                    alt="linkedin icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
