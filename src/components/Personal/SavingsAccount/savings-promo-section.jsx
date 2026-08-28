import "./savings-promo-section.css";
import { FiInfo } from "react-icons/fi";

const SavingsPromoCard = () => {
    return (
        <section className="promo-card-section">
            <div className="promo-card">
                {/* Left Side */}
                <div className="promo-left">
                    <div className="promo-icon">
                        <img
                            src="/assets/images/promotion.svg"
                            alt Promotional rate
                        />
                        </div>
                        <h3>
                            Simple savings with easy access
                        </h3>

                        <div className="promo-line"></div>
                    

                    {/* Divider */}
                    <div className="promo-divider"></div>
                </div>

                {/* Right Side */}
                <div className="promo-right">
                    <p>
                      Open a Cedar Capital Instant Access Savings Account and keep your money in one convenient place. The account is designed to make saving straightforward while giving you flexibility to access your funds when you need them.
                    </p>

                    <p>
                        Manage your savings securely through your Cedar Capital account, add funds when it suits you, and keep track of your balance with ease. Account availability, balance limits, withdrawal conditions, subscription fees and plan terms may vary depending on your selected plan and currency.
                    </p>

                    <div className="promo-note">
                        <FiInfo />
                        <span>
                            Instant Access Savings terms apply.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingsPromoCard;