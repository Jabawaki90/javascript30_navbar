import React, { useEffect, useState } from "react";
import "./MiddleContainer.scss";
import { Button, Image } from "antd";
import { ReactComponent as Capterra } from "../../public/CapterraLogo.svg";
import { ReactComponent as Alternative } from "../../public/AlternativeToLogo.svg";

const MiddleContainer = () => {
  return (
    <div className="middle-main-container">
      <div className="middle-left-container">
        <div className="middle-title-container">
          <p className="title-left">Ondeck is your remote</p>
          <p className="title-right">conference calling tool</p>
        </div>
        <p className="normal-text">
          Ondeck is a service that allows you to create beautiful, online, and
          encrypted video calls for you and your remote team.
        </p>
        <Button className="content-button content-try">Try for Free</Button>
        <div className="middle-footer-container">
          <p className="normal-text">5.0 Rating based on reviews from:</p>
          <Capterra className="middle-logo" />
          <Alternative className="middle-logo" />
        </div>
      </div>
      <div className="middle-right-container">
        <Image className="image-container" src="images/HeroImage.png" />
      </div>
    </div>
  );
};

export default MiddleContainer;
