import "./section3.css";

function Section3(props) {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        <img src={props.icon} alt={props.title} className="feature-icon" />
      </div>
      <h3 className="feature-title">{props.title}</h3>
      <p className="feature-desc">{props.description}</p>
    </div>
  );
}

export default Section3;
