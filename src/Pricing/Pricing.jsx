import Pricingsec1 from "./Pricingsection1/Pricingsec1.jsx";
import Pricingsec3 from "./Pricingsection3/Pricingsec3.jsx";
import Pricingsec2 from "./Pricingsection2/Pricingsec2";
import Featuressec3 from "../Features/Featuressection3/Featuressec3.jsx";
import CompareRow from "./Pricingsection3/Pricingsec3.jsx";

function Pricing() {
  return (
    <div>
      <Pricingsec1 />
      <Pricingsec2 />
      <section className="compare-section">
        <h2 className="compare-maintitle">COMPARE</h2>

        <div className="compare-table">
          {/* ცხრილის თავში Desktop-ისთვის */}
          <div className="compare-header">
            <span className="feature-head">THE FEATURES</span>
            <div className="plans-head">
              <span>BASIC</span>
              <span>PRO</span>
              <span>BUSINESS</span>
            </div>
          </div>

          <div className="compare-body">
            <CompareRow feature="UNLIMITED STORY POSTING" basic pro business />
            <CompareRow feature="UNLIMITED PHOTO UPLOAD" basic pro business />
            <CompareRow
              feature="EMBEDDING CUSTOM CONTENT"
              basic={false}
              pro
              business
            />
            <CompareRow
              feature="CUSTOMIZE METADATA"
              basic={false}
              pro
              business
            />
            <CompareRow
              feature="ADVANCED METRICS"
              basic={false}
              pro={false}
              business
            />
            <CompareRow
              feature="PHOTO DOWNLOADS"
              basic={false}
              pro={false}
              business
            />
            <CompareRow
              feature="SEARCH ENGINE INDEXING"
              basic={false}
              pro={false}
              business
            />
            <CompareRow
              feature="CUSTOM ANALYTICS"
              basic={false}
              pro={false}
              business
            />
          </div>
        </div>
      </section>
      <Featuressec3 />
    </div>
  );
}
export default Pricing;
