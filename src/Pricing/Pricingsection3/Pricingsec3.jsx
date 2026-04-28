import "./Pricingsec3.css";
import checkIcon from "../../assets/check.svg"; // დარწმუნდი რომ გაქვს check აიქონი

function CompareRow({ feature, basic, pro, business }) {
  return (
    <div className="compare-row">
      <div className="comparefeature-name">{feature}</div>
      <div className="compare-statusbox">
        <div className="compare-status">
          <span className="mobile-only">BASIC</span>
          {basic && <img src={checkIcon} alt="check" />}
        </div>
        <div className="compare-status">
          <span className="mobile-only">PRO</span>
          {pro && <img src={checkIcon} alt="check" />}
        </div>
        <div className="compare-status">
          <span className="mobile-only">BUSINESS</span>
          {business && <img src={checkIcon} alt="check" />}
        </div>
      </div>
    </div>
  );
}

export default CompareRow;
