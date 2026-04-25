import { Link } from "react-router-dom";
import "./Section2.css"

function StoryCard(props) {
  return (
    <div className="story-card">
      <img src={props.image} alt={props.title} className="story-img" />
      
      {/* გრადიენტი, რომ ტექსტი იკითხებოდეს */}
      <div className="story-overlay"></div>

      <div className="story-content">
        <p className="story-date">{props.date}</p>
        <h3 className="story-title">{props.title}</h3>
        <p className="story-author">by {props.author}</p>
        
        <hr className="story-divider" />

        <Link to="/stories" className="story-link">
          <span>READ STORY</span>
          <img src={props.arrowicon} alt="arrow" className="white-arrow" />
        </Link>
      </div>
      
      {/* ფერადი ხაზი ჰოვერისთვის */}
      <div className="hover-line"></div>
    </div>
  );
}

export default StoryCard;