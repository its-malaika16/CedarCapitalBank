
import "./about-hero-section.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        <div className="about-content">
          <p className="about-label">About Cedar Capital Bank</p>

          <h1 className="about-title">
            Banking built for the way
            <br />
            modern businesses operate.
          </h1>

          <p className="about-description">
            Cedar Capital Bank provides secure, flexible financial solutions
            that help businesses manage payments, payroll, currencies,
            <br className="desktop-break" />
            and everyday financial operations with confidence.
          </p>

          <button className="about-button" type="button">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;