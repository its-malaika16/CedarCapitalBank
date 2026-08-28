import "./freelance-features-section.css";

const features = [
  {
    icon: "/assets/images/gift.svg",
    title: "Earn cashback",
    description:
      "Receive up to 1% cashback when you use your card for eligible business purchases.",
  },
  {
    icon: "/assets/images/arrow.svg",
    title: "Accept & settle payments",
    description:
      "Offer clients flexible ways to pay online or in person. All earnings settle neatly into your Professional Account, ready for tracking and withdrawal.",
  },
  {
    icon: "/assets/images/flow.svg",
    title: "Track your cashflow",
    description:
      "Access smart analytics that help you understand your cashflow, spending, and sales, giving you a clear view of your freelance finances.",
  },
];

const FreelancerFeatures = () => {
  return (
    <section className="freelancer-features">
      <div className="freelancer-container">
        <div className="section-header">
          <h2>More than a freelance account</h2>

          <p>
            Create your Professional Account in minutes inside the
            Cedar Capital app. Keep your business finances separate
            with a dedicated balance and a card designed for everyday
            work expenses.
          </p>

          <div className="header-line"></div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-circle">
                <img src = {feature.icon} />
              </div>

              <h3>{feature.title}</h3>

              <div className="card-line"></div>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancerFeatures;