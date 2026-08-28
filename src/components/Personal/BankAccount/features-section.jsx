import "./features-section.css";

const features = [
  {
    icon: "/assets/images/trading.svg",
    title: "Earn up to 4% AER (variable), paid daily",
    description:
      "Watch your savings grow with competitive, flexible rates. Rates vary by plan. Fees and plan terms apply.",
  },
  {
    icon: "/assets/images/global.svg",
    title: "Send money abroad at competitive rates",
    description:
      "Transfer funds internationally in seconds, anytime, anywhere.",
  },
  {
    icon: "/assets/images/bank.svg",
    title: "Make Cedar Capital your main bank account",
    description:
      "Move your salary, payments, and direct debits effortlessly with our seamless account switching service.",
  },
  {
    icon: "/assets/images/hands.svg",
    title: "Open accounts together",
    description:
      "Manage shared finances with Joint Accounts, or empower younger family members with Kids & Teens Accounts.",
  },
  {
    icon: "/assets/images/bag.svg",
    title: "Perfect for freelancers and creators",
    description:
      "Open a Pro account to manage freelance income and earn up to 1% cashback on expenses.",
  },
  {
    icon: "/assets/images/chat.svg",
    title: "Pay back friends instantly",
    description:
      "Chat, send, and receive money instantly with anyone using Cedar Capital.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="account-features-section">
      <div className="account-features-container">
        <h2>Everything you need, in <span> one </span>place</h2>

        <div className="account-features-grid">
          {features.map((feature, index) => (
            <div className="account-feature-card" key={index}>
              <div className="account-icon-wrapper">
                <img src = {feature.icon} />
              </div>

              <h3>{feature.title}</h3>

              <div className="account-feature-line"></div>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;