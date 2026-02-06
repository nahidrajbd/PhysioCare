import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="about-page ">
            <div className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Leading the way in physiotherapy solutions</p>
                </div>
            </div>

            <section className="section">
                <div className="container about-content">
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>
                            PhysioCare BD is a premier provider of high-quality physiotherapy and rehabilitation equipment in Bangladesh.
                            Founded with a vision to enhance patient care, we bridge the gap between advanced medical technology and local healthcare providers.
                        </p>
                        <p>
                            We serve hospitals, clinics, diagnostic centers, and individual patients with a wide range of products designed to aid recovery and improve quality of life.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            To empower healthcare professionals with reliable, state-of-the-art physiotherapy equipment that ensures effective treatment and faster recovery for patients across Bangladesh.
                        </p>

                        <h2>Commitment to Quality</h2>
                        <p>
                            We believe quality is non-negotiable in healthcare. Every product in our inventory undergoes rigorous selection and testing processes.
                            We partner with globally recognized manufacturers to bring you equipment that meets international safety and performance standards.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="placeholder-about"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          background-color: var(--bg-light);
          padding: 4rem 0;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
        }
        .page-header h1 {
          font-size: 3rem;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .page-header p {
          color: var(--secondary);
          font-size: 1.2rem;
        }
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .about-text h2 {
          color: var(--primary);
          font-size: 1.75rem;
          margin-bottom: 1rem;
          margin-top: 2rem;
        }
        .about-text h2:first-child {
          margin-top: 0;
        }
        .about-text p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
        .about-image {
          height: 100%;
          min-height: 400px;
        }
        .placeholder-about {
          width: 100%;
          height: 100%;
          background: #cbd5e1; /* Slate 300 */
          border-radius: var(--radius);
          min-height: 400px;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default About;
