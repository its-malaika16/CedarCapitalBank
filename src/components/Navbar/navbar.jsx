import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="logo">

                    <img src = "/assets/images/faviconBank.svg" />
                    <div className="logo-text">
                        <h2>CEDAR</h2>
                        <span>CAPITAL BANK</span>
                    </div>
                </Link>


                {/* Mobile Menu */}
                <button
                    className="menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Navigation */}
                <div className={`nav-wrapper ${isOpen ? "active" : ""}`}>
                    <ul className="nav-links">
                        {/* Personal Dropdown */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <button
                                className="nav-item dropdown-btn"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                Personal
                            </button>

                            <div
                                className={`dropdown-menu ${showDropdown ? "show" : ""
                                    }`}
                            >
                                <div className="dropdown-column">
                                    <h4>Accounts</h4>

                                    <Link to="/bank-account">Bank Account</Link>
                                    <Link to="/joint-account">Joint Account</Link>
                                    <Link to="/professional-account">
                                        Professional Account
                                    </Link>
                                    <Link to="/savings-account">
                                        Savings Account
                                    </Link>
                                    <Link to="/teen-account">
                                        16-17 Account
                                    </Link>
                                </div>

                                <div className="dropdown-column">
                                    <h4>Plans</h4>

                                    <Link to="/plans/standard">Standard</Link>
                                    <Link to="/plans/plus">Plus</Link>
                                    <Link to="/plans/premium">Premium</Link>
                                    <Link to="/plans/metal">Metal</Link>
                                    <Link to="/plans/ultra">Ultra</Link>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link to="/business" className="nav-item">
                                Business
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" className="nav-item">
                                About
                            </Link>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="nav-actions">
                        <Link to="/login" className="login-btn">
                            Log in
                        </Link>

                        <Link to="/signup" className="signup-btn">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;