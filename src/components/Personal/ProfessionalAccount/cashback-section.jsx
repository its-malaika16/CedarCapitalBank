import "./cashback-section.css";

const CashbackSection = () => {
  return (
    <section className="cashback-section">
      <div className="cashback-container">
        <div className="cashback-content">
          <h2>
            Earn up to 1% cashback on
            <br />
            business spend
          </h2>

          <p className="cashback-description">
            Turn everyday business expenses into rewards. Use your
            card to earn cashback, and unlock higher rates as your
            sales grow. Your effort deserves recognition.
          </p>

          <p className="cashback-note">
            Terms apply. Cashback varies by plan; certain merchants
            excluded.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;