import "./steps-section.css";

const steps = [
  {
    icon: "/assets/images/user.svg",
    step: "STEP 01",
    title: "Open your account",
    description:
      "Then move your salary by sharing your account number or IBAN with your employer.",
  },
  {
    icon: "/assets/images/wallet.svg",
    step: "STEP 02",
    title: "Switch your payments",
    description:
      "Move any recurring payments (i.e. subscriptions and utility bills) from your other accounts to Cedar Capital Account.",
  },
  {
    icon: "/assets/images/calendar.svg",
    step: "STEP 03",
    title: "Automate payday",
    description:
      "Sort your salary automatically into Pockets for bills, savings, or spend.",
  },
];

const GetStartedSection = () => {
  return (
    <section className="get-started">
      <div className="get-started-container">
        <div className="section-heading">
          <h2>Switch to Cedar Capital in <span>three </span>steps </h2>
          <p>
            Experience a seamless transition to modern banking
            with our simplified onboarding process.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="icon-box">
                <img src= {step.icon} />
              </div>

              <span className="step-number">
                {step.step}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;