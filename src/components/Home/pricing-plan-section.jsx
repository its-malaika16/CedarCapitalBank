import "./pricing-plan-section.css";

const plans = [
  {
    name: "Standard",
    price: "Free",
    description:
      "For the financial basics, everything you need for better money management in one place. Sending money abroad or sticking to a budget has never been easier.",
  },
  {
    name: "Plus",
    price: "£3.99/month",
    description:
      "For the smart spender. Access additional benefits like better limits for spending abroad and insurance for your purchases on our affordable paid plan.",
  },
  {
    name: "Premium",
    price: "£7.99/month",
    description:
      "For elevating every day. Access exclusive subscriptions, better savings rates, and exchange unlimited amounts of money.",
  },
  {
    name: "Metal",
    price: "£14.99/month",
    description:
      "For the global travellers and traders. Relax with travel insurance, enjoy enhanced limits, and subscriptions worth £2,200 annually.",
  },
  {
    name: "Ultra",
    price: "£55/month",
    description:
      "For those seeking the best of Cedar Capital. Get exceptional benefits like unlimited airport lounge access, monthly global data, partner subscriptions, and cancellation cover.",
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing">
      <div className="pricing-container">
        <h2 className="pricing-title">Choose your plan</h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${
                index >= 3 ? "wide-card" : ""
              }`}
            >
              <h3>{plan.name}</h3>
              <h4>{plan.price}</h4>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;