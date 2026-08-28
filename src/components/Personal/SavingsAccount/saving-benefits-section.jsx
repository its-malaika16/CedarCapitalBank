import "./saving-benefits-section.css";

const benefits = [
  {
    icon: "/assets/images/saving-dollar.svg",
    title: "Save up to £5,000,000",
    description:
      "Whether you deposit a little or a lot, your savings start earning interest immediately.",
  },
  {
    icon: "/assets/images/saving-clock.svg",
    title: "Access anytime",
    description:
      "Enjoy fee-free access to your money whenever you need it with no lock-ins or waiting periods.",
  },
  {
    icon: "/assets/images/saving-shield.svg",
    title: "Peace of mind built in",
    description:
      "Your savings are protected up to the applicable statutory limit through our regulated banking partners.",
  },
];

const SavingsBenefits = () => {
  return (
    <section className="savings-benefits">
      <div className="savings-container">
        <div className="section-header">
          <h2>Simple, secure savings</h2>

          <div className="header-line"></div>

          <p>
            Our competitive rates are just one reason your money
            thrives with Cedar Capital.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="icon-circle">
                <img src = {benefit.icon} />
              </div>

              <div className="card-line"></div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="eligibility-note">
          <img
            src="/assets/images/saving-shield.svg" />
            <span>Eligibility criteria apply.</span>
        </div>
      </div>
    </section>
  );
};

export default SavingsBenefits;