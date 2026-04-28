import "./Featuressec1.css";
// დარწმუნდი, რომ ფოტოს გზა სწორია
import cameramanImg from "../../assets/featurescameraman.png"; 

function Featuressec1() {
  return (
    <section className="f-hero-layout">
      {/* მარცხენა მხარე: ტექსტი და გრადიენტიანი ხაზი */}
      <div className="f-hero-text-box">
        <div className="f-accent-line"></div>
        <div className="f-content">
          <h1 className="f-title">FEATURES</h1>
          <p className="f-description">
            We make sure all of our features are designed to be loved by every 
            aspiring and even professional photographers who wanted to share 
            their stories.
          </p>
        </div>
      </div>

      {/* მარჯვენა მხარე: ფოტო */}
      <div className="f-hero-img-box">
        <img src={cameramanImg} alt="cameraman" className="f-img" />
      </div>
    </section>
  );
}

export default Featuressec1;