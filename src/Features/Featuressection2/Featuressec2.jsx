import "./Featuressec2.css";

// კომპონენტი "feature" კლასებით
function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon-box">
        <img src={icon} alt={title} className="feature-img" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{description}</p>
    </div>
  );
}

export default FeatureItem;