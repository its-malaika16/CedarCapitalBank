import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Logo Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src = "/assets/images/faviconBank.svg" />

              <div className="footer-logo-text">
                <h3>Cedar Capital</h3>
                <span>Bank</span>
              </div>
            </Link>

            <p>
              Steady banking, built on a two-hundred-year habit of
              looking after other people's money.
            </p>
          </div>

          {/* Accounts */}
          <div className="footer-column">
            <h4>ACCOUNTS</h4>

            <Link to="/personal/bankaccount">Bank account</Link>
            <Link to="/personal/jointaccount">Joint account</Link>
            <Link to="/personal/professionalaccount">
              Professional account
            </Link>
            <Link to="/personal/savingsaccount">
              Savings account
            </Link>
            <Link to="/teen-account">
              16-17 account
            </Link>
          </div>

          {/* Plans */}
          <div className="footer-column">
            <h4>PLANS</h4>

            <Link to="/plans/standard">Standard</Link>
            <Link to="/plans/plus">Plus</Link>
            <Link to="/plans/premium">Premium</Link>
            <Link to="/plans/metal">Metal</Link>
            <Link to="/plans/ultra">Ultra</Link>
          </div>

          {/* Security */}
          <div className="footer-column">
            <h4>SECURITY</h4>

            <Link to="/security">
              How we protect your money
            </Link>

            <Link to="/report-lost-device">
              Report a lost device
            </Link>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>COMPANY</h4>

            <Link to="/about">About</Link>
            <Link to="/business">Business</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/help-centre">Help centre</Link>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 Cedar Capital Bank. All rights reserved.
          </p>

          <p>
            Deposits protected up to £85,000 by the deposit
            guarantee scheme.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;