import "./professional-steps-section.css";

const steps = [
  {
    number: "1",
    icon: "/assets/images/prof-acc.svg",
    title:
      "Add a Professional Account and choose the category that best describes your freelance work",
  },
  {
    number: "2",
    icon: "/assets/images/prof-doc.svg",
    title:
      "Enter a short description of your business activity",
  },
  {
    number: "3",
    icon: "/assets/images/prof-proof.svg",
    title:
      "Provide proof of your work such as a registration document, website, or social media page",
  },
];

const GetStartedSteps = () => {
  return (
    <section className="started-section">
      <div className="started-container">
        <div className="started-header">
          <h2>How to get started?</h2>

          <div className="title-line">
            <span className="blue-line"></span>
            <span className="red-line"></span>
          </div>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={index}>
              <div className="step-card">
                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  <img src = {step.icon} />
                </div>

                <div className="card-line"></div>

                <h3>{step.title}</h3>
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

export default GetStartedSteps;