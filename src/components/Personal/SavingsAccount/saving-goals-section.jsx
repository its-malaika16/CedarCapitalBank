import "./saving-goals-section.css";

const goals = [
    {
        title: "Wedding",
        image: "/assets/images/saving-wedding.png",
    },
    {
        title: "Adventure",
        image: "/assets/images/saving-adventure.png",
    },
    {
        title: "Moving",
        image: "/assets/images/saving-moving.png",
    },
];

const SavingsGoalsSection = () => {
    return (
        <section className="savings-goals">
            <div className="savings-goals-container">
                <div className="section-header">
                    <h2>For when money matters most</h2>

                    <p>
                        Add and withdraw funds easily, and use built-in tools to
                        help you work toward your savings goals. When life's big
                        moments arrive, you'll be ready.
                    </p>
                </div>

                <div className="goals-grid">
                    {goals.map((goal, index) => (
                        <div className="goal-card" key={index}>
                            <img
                                src={goal.image} />
                            <div className="goal-overlay">
                                <h3>{goal.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SavingsGoalsSection;