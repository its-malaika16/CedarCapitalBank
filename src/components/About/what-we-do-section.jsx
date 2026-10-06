
import "./what-we-do-section.css";

const services = [
  {
    id: 1,
    icon: '/assets/images/global-red.svg',
    title: "Business Banking",
    description:
      "Flexible financial tools designed to support the everyday needs of modern businesses.",
  },
  {
    id: 2,
    icon: '/assets/images/bank-red.svg',
    title: "Global Payments",
    description:
      "Simplify domestic and cross-border payments with reliable payment infrastructure.",
  },
  {
    id: 3,
    icon: '/assets/images/coins.svg',
    title: "Multi-Currency",
    description:
      "Manage multiple currencies and international financial activity through one platform.",
  },
  {
    id: 4,
    icon: '/assets/images/account.svg',
    title: "Payroll Payments",
    description:
      "Streamline payroll-related payments and employee financial operations securely.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="what-we-do-container">
        <h2 className="what-we-do-title">What We Do</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.icon} alt={service.title} className="service-icon" />

              <h3 className="service-title">{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;