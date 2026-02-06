import { ArrowRight, CheckCircle, ShieldCheck, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="hero-title">
                            Advanced Physiotherapy <br />
                            <span className="text-highlight">Equipment Solutions</span>
                        </h1>
                        <p className="hero-subtitle">
                            PhysioCare BD is Bangladesh's premier supplier of medical-grade rehabilitation and physiotherapy equipment. trusted by clinics and professionals.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary">
                                Explore Products
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="image-placeholder-gradient"></div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Why PhysioCare BD?</h2>
                        <p className="section-subtitle">
                            We are dedicated to improving patient outcomes through high-quality, reliable, and affordable physiotherapy technology.
                        </p>
                    </div>

                    <div className="features-grid">
                        {[
                            { icon: ShieldCheck, title: "Quality Tested", desc: "All equipment undergoes rigorous quality checks." },
                            { icon: Truck, title: "Fast Delivery", desc: "Reliable shipping across all of Bangladesh." },
                            { icon: Users, title: "Expert Support", desc: "Professional guidance for clinics and home users." },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="feature-icon">
                                    <feature.icon size={32} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories Preview */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Our Solutions</h2>
                    <div className="categories-grid">
                        {[
                            "Electrotherapy",
                            "Ultrasound Therapy",
                            "Rehabilitation",
                            "Heat & Cold Components",
                            "Traction Units",
                            "Exercise Equipment"
                        ].map((cat, index) => (
                            <Link to="/products" key={index} className="category-card">
                                <span>{cat}</span>
                                <ArrowRight size={20} className="cat-arrow" />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/products" className="btn btn-primary">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-container">
                    <h2>Ready to Upgrade Your Clinic?</h2>
                    <p>Get the best physiotherapy equipment in Bangladesh. Contact us today for a quote.</p>
                    <Link to="/contact" className="btn btn-white">Contact Sales</Link>
                </div>
            </section>

            <style jsx>{`
        .hero {
          padding: 6rem 0;
          background: linear-gradient(to right, #f0fdfa, #ffffff);
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }
        .text-highlight {
          color: var(--primary);
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
        }
        .image-placeholder-gradient {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, var(--primary) 0%, #2dd4bf 100%);
          border-radius: 2rem;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          opacity: 0.9;
        }
        
        .bg-light {
          background-color: var(--bg-light);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .feature-card {
          background: var(--white);
          padding: 2rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: transform 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .feature-icon {
          width: 64px;
          height: 64px;
          background: var(--accent);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .feature-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .category-card {
          background: var(--white);
          border: 1px solid #e2e8f0;
          padding: 1.5rem;
          border-radius: var(--radius);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          transition: all 0.3s;
        }
        .category-card:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateX(5px);
        }
        .mt-8 { margin-top: 3rem; }
        
        .cta-section {
          background-color: var(--primary);
          color: var(--white);
          padding: 5rem 0;
          text-align: center;
        }
        .cta-container h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .cta-container p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .btn-white {
          background-color: var(--white);
          color: var(--primary);
          padding: 0.75rem 2rem;
          border-radius: var(--radius);
          font-weight: 600;
          transition: transform 0.2s;
        }
        .btn-white:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle, .hero-buttons {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
