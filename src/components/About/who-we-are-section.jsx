import "./who-we-are-section.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are-container">

        {/* Left Content */}
        <div className="who-we-are-content">
          <p className="section-label">Who We Are</p>

          <h2 className="section-title">
            Built around modern
            <br />
            business needs
          </h2>

          <p className="section-description">
            Cedar Capital Bank is a digital-first financial platform designed
            to simplify the way businesses manage their money. We bring
            essential financial services together through secure,
            technology-driven infrastructure, helping businesses manage
            payments, payroll, multi-currency operations, and cross-border
            financial activity from one connected platform. Our approach
            combines financial technology, security, and operational
            efficiency to give businesses greater control and visibility over
            their financial operations.
          </p>
        </div>

        {/* Right Image */}
        <div className="who-we-are-image-wrapper">
          <img src= "/assets/images/building.jpg" alt="Who We Are" className="who-we-are-image" />
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;