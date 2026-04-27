import { Link } from "react-router-dom";
import "./Section2.css"

function StoryCard(props) {
  return (
    <div className="story-card">
      <img src={props.image} alt={props.title} className="story-img" />

      <div className="story-overlay"></div>

      <div className="story-content">
        {/* თუ date არსებობს, გამოაჩენს, თუ არა - გამოტოვებს */}
        {props.date && <p className="story-date">{props.date}</p>}
        
        <h3 className="story-title">{props.title}</h3>
        <p className="story-author">by {props.author}</p>
        
        <hr className="story-divider" />

        <Link to="/stories" className="story-link" onClick={() => window.scrollTo(0, 0)}>
          <span>READ STORY</span>
          <img src={props.arrowicon} alt="arrow" className="white-arrow" />
        </Link>
      </div>
      
      <div className="hover-line"></div>
    </div>
  );
}

export default StoryCard;