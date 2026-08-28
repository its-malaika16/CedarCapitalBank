import "./savings-hero-section.css";

const SavingsHeroSection = () => {
  return (
    <section className="banking-hero">
      <div className="banking-hero-container">
        <span className="hero-tag">
          Cedar Capital Instant Access Savings
        </span>

        <h1>
          Earn 5% AER on your 
          <br />
          savings
        </h1>

        <p>
          Your money deserves momentum. Open a Cedar Capital Instant Access Savings account during our promotional period and enjoy a boosted 5% AER (variable) — designed to help your balance grow from day one.
        </p>

        <button className="hero-btn">
          Open a savings account
        </button>
      </div>
    </section>
  );
};

export default SavingsHeroSection;
