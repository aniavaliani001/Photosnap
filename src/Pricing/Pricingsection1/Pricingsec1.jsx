import "./Pricingsec1.css";
import girlwithcamImg from "../../assets/girlwithcamera.png";

function Pricingsec1() {
  return (
    <section className="pricinghero-layout">
      {/* მარცხენა მხარე: ტექსტი და გრადიენტიანი ხაზი */}
      <div className="pricinghero-textbox">
        <div className="pricingaccent-line"></div>
        <div className="pricing-content">
          <h1 className="pricing-title">PRICING</h1>
          <p className="pricing-description">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
      </div>

      {/* მარჯვენა მხარე: ფოტო */}
      <div className="pricinghero-imgbox">
        <img src={girlwithcamImg} alt="cameragirl" className="pricing-img" />
      </div>
    </section>
  );
}

export default Pricingsec1;
