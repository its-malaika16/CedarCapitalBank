import "./stats-section.css";

const TrustStats = () => {
  const stats = [
    {
      icon: "/assets/images/Star.svg",
      text: "Rated 4.7 by customers worldwide",
    },
    {
      icon: "/assets/images/people.svg",
      text: "Trusted by millions across global markets",
    },
    {
      icon: "/assets/images/award.svg",
      text: "Recognized as a leading innovator in digital finance",
    },
  ];

  return (
    <section className="trust-stats">
      <div className="trust-container">
        {stats.map((item, index) => (
          <div className="trust-item" key={index}>
           <img src = {item.icon} />

            <h3>{item.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStats;