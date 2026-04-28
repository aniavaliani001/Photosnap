import "./Featuressec2.css";
// აიქონები
import responsiveIcon from "../../assets/001-responsive.png";
import foreverIcon from "../../assets/002-forever.png";
import bullhornIcon from "../../assets/003-bullhorn.png";
import customDomainIcon from "../../assets/004-www.svg";
import exposureIcon from "../../assets/005-drag.svg";
import dragDropIcon from "../../assets/006-slider.svg";

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

function Featuressec2() {
  return (
    <section className="feature-section">
      <div className="feature-grid">
        <FeatureItem 
          icon={responsiveIcon} 
          title="100% Responsive" 
          description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen." 
        />
        <FeatureItem 
          icon={foreverIcon} 
          title="No Photo Upload Limit" 
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go." 
        />
        <FeatureItem 
          icon={bullhornIcon} 
          title="Available to Embed" 
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more." 
        />
        <FeatureItem 
          icon={customDomainIcon} 
          title="Custom Domain" 
          description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!" 
        />
        <FeatureItem 
          icon={exposureIcon} 
          title="Boost Your Exposure" 
          description="Users that viewed your story or gallery can easily get notified of new and featured stories with our built-in mailing list." 
        />
        <FeatureItem 
          icon={dragDropIcon} 
          title="Drag & Drop Image" 
          description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories." 
        />
      </div>
    </section>
  );
}

export default Featuressec2;