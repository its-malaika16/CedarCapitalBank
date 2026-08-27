import "./joint-cards-section.css";

const JointCardsSection = () => {
  return (
    <section className="joint-cards">
      <div className="joint-cards-container">
        <div className="content">
          <h2>Two cards, one shared plan</h2>

          <p>
            Choose matching physical cards or go fully digital. The
            choice is yours. Pick from exclusive Joint Account card
            designs and link them to dedicated budgeting Pockets for
            smarter spending.
          </p>

          <span className="note">
            Metal and Premium card designs available on paid plans
            only.<br/> Plan fees and terms apply.
          </span>

          <div className="buttons">
            <button>Virtual</button>
            <button>Physical</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointCardsSection;