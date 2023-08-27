import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../public/Logo.svg";
import { ReactComponent as Spense } from "../../public/Spense_Icon.svg";
import { ReactComponent as Fiber } from "../../public/Fiber_Icon.svg";
import { ReactComponent as Gradie } from "../../public/Gradie_Icon.svg";
import { ReactComponent as Menu } from "../../public/Menu.svg";

const items = [
  {
    key: "1",
    label: (
      <div className="option-container">
        <Spense />
        <div className="text-group">
          <p className="option-title">Spense</p>
          <p className="option-desc">
            Spense is a landing page for writers. Great for practicing absolute
            positioning and flex layouts.
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="option-container">
        <Fiber />
        <div className="text-group">
          <p className="option-title">Fiber Landing Page</p>
          <p className="option-desc">
            An online portfolio generator. Great to practice flex/grid layouts,
            and absolute positioning.
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="option-container">
        <Gradie />
        <div className="text-group">
          <p className="option-title">Gradie Sign Up Page</p>
          <p className="option-desc">
            Gradie is a simple sign up page, great to practice centering
            layouts.
          </p>
        </div>
      </div>
    ),
  },
];

const buttonList = ["Products", "Challenges", "Resources", "Other Links"];

const buttonListComponent = [
  {
    key: "1",
    label: (
      <Dropdown
        className="dropdown-container"
        menu={{
          items,
        }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <Button className="middle-button" type="text">
          Products
        </Button>
      </Dropdown>
    ),
  },
  {
    key: "2",
    label: (
      <Dropdown
        className="dropdown-container"
        menu={{
          items,
        }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <Button className="middle-button" type="text">
          Challenges
        </Button>
      </Dropdown>
    ),
  },
  {
    key: "3",
    label: (
      <Dropdown
        className="dropdown-container"
        menu={{
          items,
        }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <Button className="middle-button" type="text">
          Resources
        </Button>
      </Dropdown>
    ),
  },
  {
    key: "4",
    label: (
      <Dropdown
        className="dropdown-container"
        menu={{
          items,
        }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <Button className="middle-button" type="text">
          Other Links
        </Button>
      </Dropdown>
    ),
  },
];

const Navbar = (props) => {
  return (
    <div className="navbar-main-container">
      <Logo />
      <div className="navbar-middle-container">
        {buttonList.map((e, i) => {
          return (
            <Dropdown
              key={i}
              className="dropdown-container"
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button className="middle-button" type="text">
                {e}
              </Button>
            </Dropdown>
          );
        })}
      </div>
      <div className="navbar-end-container">
        <Button className="middle-button" type="text">
          Sign In
        </Button>
        <Button className="middle-button try">Try for Free</Button>
      </div>
      <Dropdown
        className="none"
        menu={{
          items: buttonListComponent,
        }}
        placement="bottom"
        arrow
      >
        <Button className="middle-button" type="text">
          <Menu />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Navbar;
