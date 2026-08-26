import "./digital-banking-section.css";

const features = [
  {
    image: "/assets/images/ecosystem.png",
    title: "Complete Banking Ecosystem",
    description:
      "Everything you need to launch, manage, and scale digital banking services from one unified platform, including payments, wallets, compliance, and customer management.",
  },
  {
    image: "/assets/images/industry.png",
    title: "Industry Expertise",
    description:
      "Built by financial technology specialists with deep experience in banking operations, regulatory compliance, and enterprise financial infrastructure.",
  },
  {
    image: "/assets/images/cloud.png",
    title: "Reliable Cloud Infrastructure",
    description:
      "Modern cloud-native architecture engineered for high availability, real-time transaction processing, and secure global banking operations.",
  },
  {
    image: "/assets/images/innovation.png",
    title: "Continuous Innovation",
    description:
      "A future-ready banking platform constantly enhanced with new technologies, smarter automation, and evolving financial capabilities.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>
            The Future of Digital Banking
            <br />
            Starts <span>Here</span>
          </h2>

          <div className="red-line"></div>

          <p>
            Empowering global businesses with secure, modern banking
            solutions.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img
                src={feature.image}
                alt={feature.title}
                className="feature-image" />

                <h3> {feature.title}</h3>
                <p> {feature.description}</p>
                 </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;