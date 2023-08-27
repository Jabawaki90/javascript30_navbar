import React from "react";
import "./Footer.scss";
import { ReactComponent as Netflix } from "../../public/NetflixLogo.svg";
import { ReactComponent as Shopify } from "../../public/ShopifyLogo.svg";
import { ReactComponent as Spotify } from "../../public/SpotifyLogo.svg";
import { ReactComponent as Walmart } from "../../public/WalmartLogo.svg";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <p className="footer-title">
        Trusted by 3+ million people at companies like
      </p>
      <div className="footer-log-container">
        <Netflix className="logo" />
        <Shopify className="logo" />
        <Spotify className="logo" />
        <Walmart className="logo" />
      </div>
    </div>
  );
};

export default Footer;
