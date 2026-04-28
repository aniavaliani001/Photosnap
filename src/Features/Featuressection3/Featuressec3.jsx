import "./Featuressec3.css";
import { Link } from "react-router-dom";
import betaImg from "../../assets/beta.png";
import arrow from "../../assets/arrowicon.png";

function Featuressec3() {
  return (
    <section className="featurebeta-container">
      <img src={betaImg} alt="beta background" className="featurebeta-bg" />

      <div className="featurebeta-accent"></div>

      <div className="featurebeta-content">
        <h2 className="featurebeta-title">
          WE’RE IN BETA. GET YOUR INVITE TODAY!
        </h2>

        {/* ლინკი, რომელიც გადაგვიყვანს ფრაისინგზე და აგვიყვანს გვერდის თავში */}
        <Link to="/pricing" className="featurebeta-button" onClick={() => window.scrollTo(0, 0)} >
          GET AN INVITE
          <img src={arrow} alt="arrow" className="featurebeta-arrow" />
        </Link>
      </div>
    </section>
  );
}

export default Featuressec3;
