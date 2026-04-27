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
            <a href="https://www.facebook.com/"><img src={Fbicon} className="fb-icon" /> </a>
            <a href="https://www.youtube.com/"><img src={Yticon} className="youtube-icon" /> </a>
            <a href="https://x.com/"><img src={Twicon} className="twitter-icon" /> </a>
            <a href="https://www.pinterest.com/"><img src={Pinteresticon} className="pinterest-icon" /> </a>
            <a href="https://www.instagram.com/?hl=en"><img src={Instaicon} className="insta-icon" /> </a>
          </div>
        </div>

          <nav className="footer-nav">
          <Link to="/" className="footer-link" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
          <Link to="/stories" className="footer-link" onClick={() => window.scrollTo(0, 0)}>STORIES</Link>
          <Link to="/features" className="footer-link" onClick={() => window.scrollTo(0, 0)}>FEATURES</Link>
          <Link to="/pricing" className="footer-link" onClick={() => window.scrollTo(0, 0)}>PRICING</Link>
          </nav>

        <div className="footer-right-block">
          <Link to="/pricing" className="footer-invite-btn" onClick={() => window.scrollTo(0, 0)}>
            GET AN INVITE 
            <img src={arrow} alt="arrow" className="arrowicon" />
          </Link> 
          <p className="copyright">Copyright 2026. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;