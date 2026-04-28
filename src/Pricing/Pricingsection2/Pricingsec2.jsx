import { useState } from "react";
import "./Pricingsec2.css";

function Pricingsec2() {
  //"გადამრთველი" - false ნიშნავს Monthly-ს
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pricing-plans-section">
      <div className="toggle-container">
        <span className={!isYearly ? "active-label" : "inactive-label"}>
          Monthly
        </span>

        <div
          className={`toggle-switch ${isYearly ? "yearly-active" : ""}`}
          onClick={() => setIsYearly(!isYearly)}
        >
          <div className="toggle-circle"></div>
        </div>

        <span className={isYearly ? "active-label" : "inactive-label"}>
          Yearly
        </span>
      </div>

      <div className="plans-cards-wrapper">
        {/* Basic Plan */}
        <div className="plan-card">
          <h3 className="plan-name">Basic</h3>
          <p className="plan-description">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <div className="price-display">
            {/* თუ isYearly-ა, გამოჩნდება $190, თუ არა $19 */}
            <h2 className="price-val">${isYearly ? "190.00" : "19.00"}</h2>
            <p className="price-time">per {isYearly ? "year" : "month"}</p>
          </div>
          <button className="pick-plan-btn">PICK PLAN</button>
        </div>

        {/* Pro Plan (შუა ქარდი - შავი) */}
        <div className="plan-card pro-black">
          <div className="gradient-top-bar"></div>
          <h3 className="plan-name">Pro</h3>
          <p className="plan-description">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <div className="price-display">
            <h2 className="price-val">${isYearly ? "390.00" : "39.00"}</h2>
            <p className="price-time">per {isYearly ? "year" : "month"}</p>
          </div>
          <button className="pick-plan-btn white-btn">PICK PLAN</button>
        </div>

        {/* Business Plan */}
        <div className="plan-card">
          <h3 className="plan-name">Business</h3>
          <p className="plan-description">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <div className="price-display">
            <h2 className="price-val">${isYearly ? "990.00" : "99.00"}</h2>
            <p className="price-time">per {isYearly ? "year" : "month"}</p>
          </div>
          <button className="pick-plan-btn">PICK PLAN</button>
        </div>
      </div>
    </section>
  );
}

export default Pricingsec2;
