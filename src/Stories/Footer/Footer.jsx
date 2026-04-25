import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/photosnaplogodark.png"; 
import Fbicon from "../../assets/Fbicon.png";
import Yticon from "../../assets/Yticon.png";
import Twicon from "../../assets/Twicon.png";
import Pinteresticon from "../../assets/Pinteresticon.png";
import Instaicon from "../../assets/Instaicon.png";
import arrow from "../../assets/arrowicon.png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-left-block">
          <img src={logo} alt="photosnap" className="footer-logo" />
          <div className="social-icons">
            <a href="#"><img src={Fbicon} className="fb-icon" /> </a>
            <a href="#"><img src={Yticon} className="youtube-icon" /> </a>
            <a href="#"><img src={Twicon} className="twitter-icon" /> </a>
            <a href="#"><img src={Pinteresticon} className="pinterest-icon" /> </a>
            <a href="#"><img src={Instaicon} className="insta-icon" /> </a>
          </div>
        </div>

          <nav className="footer-nav">
          <Link to="/home" className="footer-link">HOME</Link>
          <Link to="/stories" className="footer-link">STORIES</Link>
          <Link to="/features" className="footer-link">FEATURES</Link>
          <Link to="/pricing" className="footer-link">PRICING</Link>
          </nav>

        <div className="footer-right-block">
          <button className="footer-invite-btn">
            GET AN INVITE 
            <img src={arrow} alt="arrow" className="arrowicon" />
          </button>
          <p className="copyright">Copyright 2026. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;