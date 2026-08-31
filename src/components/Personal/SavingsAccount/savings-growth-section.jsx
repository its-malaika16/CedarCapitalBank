import "./savings-growth-section.css";

const SavingsGrowthSection = () => {
  return (
    <section className="savings-growth">
      <div className="savings-growth-container">
        <div className="growth-content">
          <h2>It all adds up</h2>

          <p className="growth-highlight">
            Saving £1,000 is a simple way to set money aside for your future while keeping your funds secure and accessible when you need them. 
          </p>

          <p className="growth-highlight">
Whether you're saving for a specific goal, building a financial cushion, or simply managing your money more effectively, an Instant Access Savings Account helps you keep your savings organised in one convenient place.
          </p>

          <p className="growth-note">
            This information is for illustration purposes only and does not consider your personal circumstances.
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