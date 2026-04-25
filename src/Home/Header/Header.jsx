import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Photosnaplogo.svg";

function Header() {
  return (
    <header className="mainheader">
      <div className="headercontainer">
        <img src={logo} alt="photosnaplogo" className="logo" />
        <nav className="nav-menu">
          <Link to="/" className="home_link">
            HOME
          </Link>
          <Link to="/stories" className="stories_link">
            STORIES
          </Link>
          <Link to="/features" className="features_link">
            FEATURES
          </Link>
          <Link to="/pricing" className="pricing_link">
            PRICING
          </Link>
        </nav>
        <Link to="/pricing" className="invite-btn">
          GET AN INVITE
        </Link>
      </div>
    </header>
  );
}

export default Header;
