import "./support-section.css";

const SupportSection = () => {
    return (
        <section className="support-section">
            <div className="support-container">
                {/* Content */}
                <div className="support-content">
                    <h2>Humans on hand, 24/7</h2>

                    <p>
                        You can speak to a real-life human through our in-app chat,
                        whenever, wherever. We're here for you 24/7.
                    </p>

                    <button className="support-btn">
                        Send us a message
                    </button>
                </div>

                {/* Image */}
                <div className="support-image">
                    <img
                        src="/assets/images/support.svg"
                        alt="Customer Support" />
                </div>
            </div>
        </section>
    );
};
export default SupportSection;