import "./Storiessection1.css";
import fullMoonImg from "../../assets/fullmoon.jpg";
import arrowWhite from "../../assets/arrowicon.png";

function Storiessection1() {
  return (
    <section
      className="stories-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fullMoonImg})`,
      }}
    >
      <div className="hero-content">
        <p className="hero-subtitle">LAST MONTH’S FEATURED STORY</p>
        <h1 className="hero-title">HAZY FULL MOON OF APPALACHIA</h1>
        <p className="hero-date">
          March 2nd 2020 <span>by John Appleseed</span>
        </p>
        <p className="hero-desc">
          The stars let out a brightness that could not be rivaled by any
          electrical source. Illuminating the entire valley shaded anew by
          celestial shadows.
        </p>
        <button className="hero-btn">
          <span>READ THE STORY</span>
          <img
            src={arrowWhite}
            alt="arrow"
            className="arrowicon"
            style={{ marginLeft: "18px" }}
          />
        </button>
      </div>
    </section>
  );
}

export default Storiessection1;
