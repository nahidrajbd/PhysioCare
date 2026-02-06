import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: "Md. Jahid Hasan", role: "CEO & Founder", image: null },
    { name: "Sarah Ahmed", role: "Head of Operations", image: null },
    { name: "Rahim Uddin", role: "Senior Technician", image: null },
    { name: "Fatima Begum", role: "Sales Manager", image: null },
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Leading the way in physiotherapy solutions</p>
        </div>
      </div>

      {/* Company Info Section */}
      <section className="section">
        <div className="container">
          <div className="about-text-container">
            <p>
              PhysioCare BD is a trusted name in the healthcare industry of Bangladesh, specializing in
              high-quality physiotherapy and rehabilitation equipment. We bridge the gap between advanced
              medical technology and local healthcare needs, ensuring that clinics and patients have access
              to the best tools for recovery.
            </p>
            <p>
              We supply a comprehensive range of medical equipment to hospitals, specialized clinics,
              and individual patients. From TENS machines to advanced ultrasound therapy units,
              we ensure every product aids in effective recovery and improves the quality of life for our users.
            </p>
            <p>
              Quality is at the heart of everything we do. We serve with integrity, ensuring that
              every device we supply is safe, durable, and effective. Our commitment extends beyond sales,
              as we strive to be a reliable partner in the journey towards better health and mobility.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="section bg-light ceo-section">
        <div className="container">
          <motion.div
            className="ceo-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="ceo-image-wrapper">
              <div className="ceo-placeholder">
                <span>CEO Photo</span>
              </div>
            </div>
            <div className="ceo-content">
              <Quote size={40} className="quote-icon" />
              <h2>Message from CEO</h2>
              <p className="ceo-message">
                "At PhysioCare BD, our mission is simple: to empower physiotherapy professionals with the best tools available.
                We believe that better equipment leads to better patient outcomes. We are committed to supporting the
                growth of physiotherapy in Bangladesh by providing reliable, affordable, and world-class technology."
              </p>
              <div className="ceo-signature">
                <h3>Md. Jahid Hasan</h3>
                <p>Founder & CEO, PhysioCare BD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The dedicated professionals behind PhysioCare BD.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-image">
                  <div className="team-placeholder">
                    <span>{member.name[0]}</span>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
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

                /* Company Info */
                .about-text-container {
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                }
                .about-text-container p {
                    color: var(--text-light);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                    font-size: 1.1rem;
                }
                .about-text-container p:last-child {
                    margin-bottom: 0;
                }

                /* CEO Section */
                .ceo-section {
                    background-color: #f8fafc;
                }
                .ceo-container {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 4rem;
                    align-items: center;
                    background: var(--white);
                    padding: 3rem;
                    border-radius: var(--radius);
                    box-shadow: var(--shadow-sm);
                }
                .ceo-image-wrapper {
                    text-align: center;
                }
                .ceo-placeholder {
                    width: 250px;
                    height: 250px;
                    background: #e2e8f0;
                    border-radius: 50%;
                    margin: 0 auto;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                }
                .quote-icon {
                    color: var(--primary);
                    margin-bottom: 1rem;
                    opacity: 0.2;
                }
                .ceo-content h2 {
                    font-size: 1.75rem;
                    margin-bottom: 1rem;
                }
                .ceo-message {
                    font-size: 1.1rem;
                    font-style: italic;
                    color: var(--text-dark);
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }
                .ceo-signature h3 {
                    color: var(--primary);
                    font-size: 1.25rem;
                }
                .ceo-signature p {
                    color: var(--text-light);
                    font-size: 0.9rem;
                }

                /* Team Section */
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 3rem;
                }
                .team-card {
                    background: var(--white);
                    border: 1px solid #e2e8f0;
                    border-radius: var(--radius);
                    overflow: hidden;
                    transition: transform 0.3s;
                    text-align: center;
                }
                .team-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--primary);
                }
                .team-image {
                    height: 250px;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .team-placeholder {
                    width: 100px;
                    height: 100px;
                    background: #e2e8f0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: #94a3b8;
                    font-weight: 700;
                }
                .team-info {
                    padding: 1.5rem;
                }
                .team-info h3 {
                    color: var(--text-dark);
                    font-size: 1.2rem;
                    margin-bottom: 0.25rem;
                }
                .team-info p {
                    color: var(--primary);
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {

                    .ceo-container {
                        grid-template-columns: 1fr;
                        text-align: center;
                        padding: 2rem;
                    }
                    .ceo-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
    </div>
  );
};

export default About;
