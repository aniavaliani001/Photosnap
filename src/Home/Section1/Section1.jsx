import { Link } from "react-router-dom";
import "./Section1.css";

function Section1(props) {
  return (
    /* დინამიური კლასები თემისთვის (dark/light) და მიმართულებისთვის (reversed) */
    <section
      className={`section-container ${props.theme} ${props.isReversed ? "reversed" : ""}`}
    >
      <div className="section-text-wrapper">
        {/* ფერადი ხაზი გამოჩნდება მხოლოდ მაშინ, როცა hasLine={true} */}
        {props.hasLine && <div className="accent-line"></div>}

        <div className="content">
          <h1 className="section-title">{props.title}</h1>
          <p className="section-desc">{props.description}</p>
          <Link to={props.linkTo || "/"} className="section-btn">
            {props.buttonText}
            <img src={props.arrowicon} alt="arrow" className="arrowicon" />
          </Link>
        </div>
      </div>

      <div className="section-image-wrapper">
        <img src={props.image} alt={props.title} />
      </div>
    </section>
  );
}

export default Section1;
