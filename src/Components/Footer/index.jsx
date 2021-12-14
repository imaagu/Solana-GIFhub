import React from "react";
import twitterLogo from "../../assets/twitter-logo.svg";
import "./index.scss";

// Constants
const BUILD_SPACE_TWITTER_HANDLE = "_buildspace";
const My_TWITTER_HANDLE = "imAagamJain";

const getTwitterLink = (handler) => {
  return `https://twitter.com/${handler}`;
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__twitter_header">
        <div className="footer-container__twitter_header__container">
          <img
            alt="Twitter Logo"
            className="footer-container__twitter_header__container__twitter-logo"
            src={twitterLogo}
          />
          <a
            className="footer-container__twitter_header__container__footer-text"
            href={getTwitterLink(BUILD_SPACE_TWITTER_HANDLE)}
            target="_blank"
            rel="noreferrer"
          >{`built on @${BUILD_SPACE_TWITTER_HANDLE}`}</a>
        </div>
        <div className="footer-container__twitter_header__container">
          <img
            alt="Twitter Logo"
            className="footer-container__twitter_header__container__twitter-logo"
            src={twitterLogo}
          />
          <a
            className="footer-container__twitter_header__container__footer-text"
            href={getTwitterLink(My_TWITTER_HANDLE)}
            target="_blank"
            rel="noreferrer"
          >{`built by @${My_TWITTER_HANDLE}`}</a>
        </div>
      </div>
      <div className="footer-container__copyright">
        <span>Made by Aagam &copy; {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
