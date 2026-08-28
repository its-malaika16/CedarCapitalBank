import "./home-hero-section.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <h1>
                        Banking 
                        Infrastructure Built 
                        for Global Business
                    </h1>

                    <p>
                        Cedar Capital Bank delivers a secure, scalable, and fully
                        integrated banking platform designed to power modern financial
                        institutions, fintech companies, and global payment operations.
                    </p>

                    <button className="hero-btn">
                        Request a demo
                    </button>
                </div>

                {/* Right Image */}
                <div className="hero-image">
                    <img
                        src="/assets/images/home-hero.png" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;