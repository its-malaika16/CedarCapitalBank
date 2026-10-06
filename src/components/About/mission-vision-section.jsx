
import "./mission-vision-section.css";

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">

        {/* Mission */}
        <div className="mv-row">
          <div className="mv-icon-area">
            <img src = "/assets/images/mission.svg" className = "mv-icon"/>
          </div>

          <div className="mv-divider"></div>

          <div className="mv-content">
            <span className="mv-label">OUR</span>

            <h2 className="mv-title">Mission</h2>

            <div className="mv-red-line"></div>

            <h3 className="mv-highlight">
              To simplify business finance through secure technology, reliable
              financial infrastructure, and solutions designed around the
              needs of modern businesses.
            </h3>

            <p className="mv-description">
              Cedar Capital Bank is committed to helping businesses manage
              payments, payroll, currencies, and financial operations more
              efficiently, giving them greater visibility, control, and
              confidence as they grow.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mv-row">
          <div className="mv-icon-area">
            <img src = "/assets/images/vision.svg" className = "mv-icon"/>
          </div>

          <div className="mv-divider"></div>

          <div className="mv-content">
            <span className="mv-label">OUR</span>

            <h2 className="mv-title">Vision</h2>

            <div className="mv-red-line"></div>

            <h3 className="mv-highlight">
              To build a more connected, accessible, and intelligent financial
              future for businesses worldwide.
            </h3>

            <p className="mv-description">
              We envision a world where businesses can manage their financial
              operations seamlessly through secure, innovative, and connected
              digital financial solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
``