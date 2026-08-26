import "./testimonials-section.css";

const testimonials = [
  {
    quote:
      "Cedar Capital Bank gave us the financial tools and reliability we needed to streamline our daily operations, manage transactions efficiently, and focus on growing our business with confidence.",
    company: "Coco Grill",
    stats: [
      "5K+ Transactions Processed Monthly",
      "25+ Daily Business Payments Managed",
      "99.5% Platform Reliability",
    ],
  },
  {
    quote:
      "With Cedar Capital Bank, we gained a secure and flexible banking platform that simplified our financial management and allowed us to focus on delivering better experiences for our customers and learners.",
    company: "Teachwise",
    stats: [
      "3K+ Transactions Processed Monthly",
      "500+ Daily Business Payments Managed",
      "99.8% Platform Reliability",
    ],
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>
            Real businesses, real <span>results</span>
          </h2>

          <p>
            How teams on Cedar Capital move money every single day.
          </p>
        </div>

        <div className="testimonial-list">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <h4 className="company-name">
                - {item.company}
              </h4>

              <div className="stats-grid">
                {item.stats.map((stat, idx) => (
                  <div className="stat-item" key={idx}>
                    <span className="check">✓</span>
                    <p>{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;