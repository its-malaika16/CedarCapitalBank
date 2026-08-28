import "./analytics-section.css";

const BusinessAnalyticsSection = () => {
  return (
    <section className="business-analytics">
      <div className="business-analytics-container">
        <div className="analytics-content">
          <h2>
            Track your business
            <br />
            performance
          </h2>

          <p>
            Access smart analytics that help you understand your
            cashflow, spending, and sales giving you a clear view of
            your freelance finances.
          </p>
        </div>

        <div className="analytics-image">
          <img src= "/assets/images/analytics-bg.png" />
        </div>
      </div>
    </section>
  );
};

export default BusinessAnalyticsSection;