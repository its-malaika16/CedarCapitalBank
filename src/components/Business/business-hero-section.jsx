import "./business-hero-section.css";

const BusinessAccountHero = () => {
  return (
    <section className="business-account-hero">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">
          <span className="hero-tag">BUSINESS</span>

          <h1>
            Banking that keeps up
            <br />
            with the invoice.
          </h1>

          <p>
            From a first freelance client to a payroll of two hundred,
            Cedar Capital handles the money side quietly.
          </p>

          <ul className="hero-features">
            <li>Account opened in a day, sort code issued straight away</li>
            <li>Team cards with limits you control</li>
            <li>Invoicing, expenses and accounting sync included</li>
          </ul>

          <div className="hero-buttons">
            <button className="primary-btn">
              Open a business account
            </button>

            <button className="secondary-btn">
              Sole trader? Start here
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image">
          <img src = "/assets/images/business-hero.png" />
        </div>

      </div>
    </section>
  );
};

export default BusinessAccountHero;