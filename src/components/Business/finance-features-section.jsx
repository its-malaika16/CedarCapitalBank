import "./finance-features-section.css";

const features = [
  {
    icon: "/assets/images/business-invoice2.svg",
    title: "Get paid faster",
    description:
      "Send branded invoices with payment links and automatic reminders when they run late.",
  },
  {
    icon: "/assets/images/business-atm.svg",
    title: "Spend with control",
    description:
      "Issue physical and virtual cards, set per-card budgets and freeze anything instantly.",
  },
  {
    icon: "/assets/images/business-document.svg",
    title: "Expenses without chasing",
    description:
      "Receipts captured in the app attach themselves to the right transaction.",
  },
  {
    icon: "/assets/images/business-group.svg",
    title: "Payroll made simple",
    description:
      "Schedule salaries in bulk and see exactly what leaves the account, and when.",
  },
//   {
//     icon: "/assets/images/cloud-sync.svg",
//     title: "Books that reconcile",
//     description:
//       "Sync with Xero, QuickBooks and Sage, or export a clean CSV in one click.",
//   },
  {
    icon: "/assets/images/saving-money.svg",
    title: "Treasury tools",
    description:
      "Park surplus cash in an interest-earning pot and move it back the same day.",
  },
];

const FinanceFeaturesSection = () => {
  return (
    <section className="finance-features">
      <div className="finance-container">
        <div className="section-header">
          <span className="section-tag">
            BUILT FOR WORK
          </span>

          <h2>
            Everything the finance side
            <br />
            needs
          </h2>

          <p>
            One account that covers getting paid, spending,
            reconciling and planning ahead.
          </p>
        </div>

        <div className="finance-features-grid">
          {features.map((feature, index) => (
            <article className="finance-feature-card" key={index}>
              <div className="finance-feature-icon">
                <img src = {feature.icon} />
              </div>

              <div className="finance-feature-content">
                <h3>{feature.title}</h3>

                <div className="finance-feature-line"></div>

                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinanceFeaturesSection;