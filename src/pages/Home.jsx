import { ArrowRight, CheckCircle, ShieldCheck, Truck, Users, Zap, Activity, Heart, Thermometer, Move, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';


import tensImage from '../assets/tens-therapy-unit.jpg';
import ultrasoundImage from '../assets/ultrasound-therapy-device.jpg';
import exerciseImage from '../assets/exercise-therapy-bands.jpg';
import tractionImage from '../assets/digital-traction-machine.jpg';
import infraredImage from '../assets/infrared-therapy-lamp.jpg';
import wobbleImage from '../assets/wobble-board.jpg';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "TENS Therapy Unit",
      description: "Advanced digital TENS machine for pain management.",
      image: tensImage
    },
    {
      id: 2,
      name: "Ultrasound Therapy",
      description: "Professional grade ultrasound device for deep tissue.",
      image: ultrasoundImage
    },
    {
      id: 3,
      name: "Exercise Bands",
      description: "High-quality resistance bands for rehabilitation.",
      image: exerciseImage
    },
    {
      id: 4,
      name: "Digital Traction",
      description: "Precise traction therapy for spinal decompression.",
      image: tractionImage
    },
    {
      id: 5,
      name: "Infrared Lamp",
      description: "Therapeutic heating for muscle relaxation.",
      image: infraredImage
    },
    {
      id: 6,
      name: "Wobble Board",
      description: "Balance training aimed at ankle stability.",
      image: wobbleImage
    }
  ];

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
            <img src="/banner.png" alt="Physiotherapy Equipment Banner" className="hero-banner-image" />
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
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Solutions</h2>
          <div className="categories-grid">
            {[
              { name: "Electrotherapy", icon: Zap },
              { name: "Ultrasound Therapy", icon: Activity },
              { name: "Rehabilitation", icon: Heart },
              { name: "Heat & Cold Components", icon: Thermometer },
              { name: "Traction Units", icon: Move },
              { name: "Exercise Equipment", icon: Dumbbell }
            ].map((cat, index) => (
              <Link to="/products" key={index} className="category-card">
                <div className="cat-content">
                  <cat.icon size={24} className="cat-icon" />
                  <span>{cat.name}</span>
                </div>
                <ArrowRight size={20} className="cat-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Top rated physiotherapy equipment for clinics and home use.</p>
          </div>
          <div className="featured-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} hideAction={true} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn btn-outline">View All Products</Link>
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
        .hero-banner-image {
          width: 100%;
          height: auto;
          border-radius: 2rem;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
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
        
        .featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .category-card {
          background: var(--white);
          border: 1px solid #e2e8f0;
          padding: 2rem; /* Increased padding */
          border-radius: var(--radius);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          transition: all 0.3s ease;
          height: 100%;
          cursor: pointer;
        }
        .cat-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .cat-icon {
            color: var(--primary);
            transition: transform 0.3s ease;
        }
        .category-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .category-card:hover .cat-arrow {
            color: var(--primary);
            transform: translateX(5px);
        }
        .cat-arrow {
            transition: transform 0.3s ease, color 0.3s ease;
            color: var(--text-light);
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

        @media (min-width: 640px) {
            .categories-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .categories-grid {
                grid-template-columns: repeat(3, 1fr);
            }
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
