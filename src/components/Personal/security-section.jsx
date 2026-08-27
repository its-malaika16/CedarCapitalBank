import "./security-section.css";

const SecuritySection = () => {
  return (
    <section className="security-section">
      <div className="account-security-container">

        <div className="security-content">
          <h2>Your money, secured</h2>

          <p>
            At Cedar Capital, we believe financial security is a
            basic right. Our systems are built to protect your
            money from the moment you sign up, and our global
            support team is available 24/7 to help every customer,
            wherever they are.
          </p>

          <button className="security-btn">
            Learn more
          </button>
        </div>

        <div className="security-image-wrapper">
          <img src = '/assets/images/security.png' />
        </div>

      </div>
    </section>
  );
};

export default SecuritySection;