import "./joint-hero-section.css";

const JointHeroSection = () => {
  return (
    <section className="banking-hero">
      <div className="banking-hero-container">
        <span className="hero-tag">
          Cedar Capital Joint Account
        </span>

        <h1>
          Shared finances,
          <br />
          made effortless
        </h1>

        <p>
          Whether you're partners, parents, or simply pooling resources, managing money together has never been smoother. Open a joint Account in minutes, right from the app.
        </p>

        <button className="hero-btn">
          Open a joint account
        </button>
      </div>
    </section>
  );
};

export default JointHeroSection;
