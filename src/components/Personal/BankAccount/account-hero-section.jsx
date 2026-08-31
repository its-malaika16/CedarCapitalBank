import "./account-hero-section.css";

const BankingHeroSection = () => {
  return (
    <section className="banking-hero">
      <div className="banking-hero-container">
        <span className="hero-tag">
          Cedar Capital Bank Account
        </span>

        <h1>
          Smooth, modern banking designed for everyday life.
        </h1>

        <p>
          Send, spend, save, and grow your money with confidence
          backed by secure technology and round-the-clock support.
          With Cedar Capital, your money finally gets the treatment
          it deserves.
        </p>

        <button className="hero-btn">
          Open a bank account
        </button>
      </div>
    </section>
  );
};

export default BankingHeroSection;
