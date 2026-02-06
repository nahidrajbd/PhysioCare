import { ShieldCheck, Truck, Phone, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const reasons = [
        {
            id: 1,
            icon: ShieldCheck,
            title: "Quality Tested Equipment",
            description: "We never compromise on quality. All our products are sourced from certified manufacturers and undergo strict quality control checks before reaching you."
        },
        {
            id: 2,
            icon: Truck,
            title: "Trusted Supplier in Bangladesh",
            description: "With years of experience, we have built a reputation for reliability. We serve major hospitals and clinics across the country with timely deliveries."
        },
        {
            id: 3,
            icon: Phone,
            title: "Professional Customer Support",
            description: "Our dedicated support team is here to assist you with installation, usage guides, and after-sales service. We are only a phone call away."
        },
        {
            id: 4,
            icon: HomeIcon,
            title: "For Clinic & Home Use",
            description: "Whether you are setting up a professional physiotherapy center or need equipment for home rehabilitation, we have the right solutions for you."
        }
    ];

    return (
        <div className="why-choose-us-page">
            <div className="page-header">
                <div className="container">
                    <h1>Why Choose Us</h1>
                    <p>Your partner in rehabilitation excellence</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="reasons-grid">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.id}
                                className="reason-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon-wrapper">
                                    <reason.icon size={40} />
                                </div>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
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
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }
        .reason-card {
           background: var(--white);
           padding: 2.5rem;
           border-radius: var(--radius);
           border: 1px solid #f1f5f9;
           box-shadow: var(--shadow);
           text-align: center;
           transition: transform 0.3s ease;
        }
        .reason-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-light);
        }
        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--accent);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .reason-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
          font-size: 1.5rem;
        }
        .reason-card p {
          color: var(--text-light);
          line-height: 1.6;
        }
      `}</style>
        </div>
    );
};

export default WhyChooseUs;
