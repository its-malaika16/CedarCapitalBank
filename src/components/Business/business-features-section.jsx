import "./business-features-section.css";

const features = [
  {
    icon: "/assets/images/business-building.svg",
    title: "Company account",
    description:
      "Opened in a day, with sort code and account number issued straight away.",
  },
  {
    icon: "/assets/images/business-user.svg",
    title: "Team access",
    description:
      "Give staff cards and spending limits without handing over the whole account.",
  },
  {
    icon: "/assets/images/business-invoice.svg",
    title: "Invoices & receipts",
    description:
      "Raise invoices, match payments and export clean books for your accountant.",
  },
  {
    icon: "/assets/images/business-globe.svg",
    title: "Multi-currency",
    description:
      "Hold and pay in 28 currencies at the real exchange rate.",
  },
];

const BusinessFeatures = () => {
  return (
    <section className="business-features">
      <div className="business-features-container">
        <div className="business-features-grid">
          {features.map((item, index) => (
            <div className="business-feature-card" key={index}>
              <div className="business-icon-circle">
                <img src = {item.icon}/>
              </div>

              <h3>{item.title}</h3>

              <div className="business-card-line"></div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
