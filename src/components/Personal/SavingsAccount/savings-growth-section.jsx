import "./savings-growth-section.css";

const SavingsGrowthSection = () => {
  return (
    <section className="savings-growth">
      <div className="savings-growth-container">
        <div className="growth-content">
          <h2>It all adds up fast</h2>

          <p className="growth-highlight">
            If you deposit £1,000 at an interest rate of 4% AER
            (variable), your balance would grow to £1,040 after
            12 months.
          </p>

          <p className="growth-note">
            This example is for illustration only and does not
            consider your personal circumstances.
          </p>
        </div>

        <div className="growth-image">
          <img
            src="/assets/images/saving-growth.png " />
        </div>
      </div>
    </section>
  );
};

export default SavingsGrowthSection;