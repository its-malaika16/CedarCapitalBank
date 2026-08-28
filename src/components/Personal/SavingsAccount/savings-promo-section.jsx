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
                            Promotional rate available
                        </h3>

                        <div className="promo-line"></div>
                    

                    {/* Divider */}
                    <div className="promo-divider"></div>
                </div>

                {/* Right Side */}
                <div className="promo-right">
                    <p>
                        Our 5% AER (variable) promotional rate is available
                        for new Cedar Capital customers who open an Instant
                        Access Savings account within the offer window.
                        Eligible customers will benefit from the boosted
                        rate for a fixed period, up to a defined balance
                        limit. After the promotional period ends, your
                        rate will automatically adjust to the standard
                        rate associated with your plan.
                    </p>

                    <p>
                        AER (Annual Equivalent Rate) reflects the interest
                        you earn over one year, including compounding.
                        Rates vary by plan tier and currency.
                        Subscription fees and plan terms apply.
                        Interest rates may change, and any interest earned
                        may be subject to applicable taxes.
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