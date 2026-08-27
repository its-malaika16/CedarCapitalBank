import "./spend-together-section.css";

const JointAccountSection = () => {
  return (
    <section className="joint-account-section">
      <div className="joint-account-container">
        
        <div className="joint-account-image">
          <img
            src= '/assets/images/jointaccount.png' /> 
        </div>

        <div className="joint-account-content">
          <h2>
            Spend together,
            <br />
            stay aligned
          </h2>

          <p>
            Keep your shared spending organized and stress-free.
            Set up automatic transfers into your Joint Account
            and let your joint budget run itself.
          </p>

          <button className="joint-account-btn">
            Get started
          </button>
        </div>

      </div>
    </section>
  );
};

export default JointAccountSection;