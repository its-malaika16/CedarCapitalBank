import "./savings-steps-section.css";

const steps = [
  {
    number: "1",
    icon: "/assets/images/saving-acc.svg",
    title:
      "Open the Cedar Capital app",
    description: "From your home screen, tap the account selector beneath your balance and choose Add new.",  
  },
  {
    number: "2",
    icon: "/assets/images/saving-doc.svg",
    title:
      "Create your savings account",
      description: "Select Savings, then choose Instant Access Savings.",  
  },
  {
    number: "3",
    icon: "/assets/images/saving-money.svg",
    title:
      "Add money",
      description: "With no minimum deposit required, you can start saving with any amount.",  
  },
];

const SavingsSteps = () => {
  return (
    <section className="started-section">
      <div className="professional-started-container">
        <div className="started-header">
          <h2>How to get started?</h2>

          <div className="title-line">
            <span className="blue-line"></span>
            <span className="prof-red-line"></span>
          </div>
        </div>

        <div className="professional-steps-grid">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={index}>
              <div className="professional-step-card">
                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  <img src = {step.icon} />
                </div>

                <div className="card-line"></div>

                <h3>{step.title}</h3>
                <p> {step.description}</p>
              </div>

              {index < 2 && (
                <div className="step-arrow">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bottom-note">
          <div className="info-icon">i</div>

          <p>
            Additional details may be requested
            depending on your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SavingsSteps;