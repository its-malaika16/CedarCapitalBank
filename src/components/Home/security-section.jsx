import "./security-section.css";

const SecuritySection = () => {
  return (
    <section className="security-section">
      <div className="security-container">
        {/* Left Content */}
        <div className="security-left">
          <h2>Security you can bank on</h2>

          <p className="security-intro">
            Keep your money safe with industry-first fraud
            protection and 24/7 support.
          </p>

          <ul className="security-list">
            <li>
              Direct access to domestic payment systems in
              8 markets
            </li>

            <li>
              77% of payments in under 20s; 96% under 24hrs
            </li>

            <li>
              Covers 160+ countries and 40+ currencies
            </li>
          </ul>

          <button className="security-btn">
            Explore our policies
          </button>
        </div>

        {/* Center Mobile Image */}
        <div className="security-image">
          <img src = "assets/images/security.svg"
            alt="Banking App"
          />
        </div>

        {/* Right Features */}
        <div className="security-right">
          <div className="feature-item">
            <h3>Global Scalability</h3>
            <p>
              Operate across 40+ currencies and jurisdictions
              on a single, unified infrastructure.
            </p>
          </div>

          <div className="feature-item">
            <h3>Flexible Solutions</h3>
            <p>
              Configure modules, workflows and limits to fit
              the way your bank actually runs.
            </p>
          </div>

          <div className="feature-item">
            <h3>Speed With Excellence</h3>
            <p>
              Launch faster with a streamlined, pre-integrated
              banking core and friction-less onboarding.
            </p>
          </div>

          <div className="feature-item">
            <h3>Next-Gen Tech</h3>
            <p>
              API-first, cloud-native architecture engineered
              for real-time, 24/7 reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;