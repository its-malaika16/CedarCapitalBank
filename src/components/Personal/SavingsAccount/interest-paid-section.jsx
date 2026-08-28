import "./interest-paid-section.css";

const InterestPaidSection = () => {
  return (
    <section className="interest-section">
      <div className="interest-container">
        <div className="interest-content">
          <h2>Interest paid daily</h2>

          <p className="interest-description">
            Open your account in seconds and watch your balance grow
            every single day.
          </p>

          <p className="interest-note">
            Rates vary by plan. Plan fees and terms apply.
          </p>

          <div className="interest-rate">
            <span className="up-to">Up to</span>

            <span className="percentage">5%</span>

            <span className="aer">
              AER <span>(variable)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestPaidSection;