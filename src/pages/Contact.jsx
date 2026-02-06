import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for quotes and inquiries</p>
                </div>
            </div>

            <section className="section">
                <div className="container contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Get in Touch</h2>
                        <p className="contact-text">
                            Have questions about our products or need a price quote?
                            Fill out the form or reach us directly.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><Mail /></div>
                            <div>
                                <h3>Email</h3>
                                <p>sales@physiocarebdplus.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Phone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+880 1700 000000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin /></div>
                            <div>
                                <h3>Office Address</h3>
                                <p>Sector 7, Uttara, Dhaka-1230, Bangladesh</p>
                            </div>
                        </div>

                        <div className="working-hours">
                            <h3>Working Hours</h3>
                            <p>Saturday - Thursday: 9:00 AM - 8:00 PM</p>
                            <p>Friday: Closed</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3>Send us a Message</h3>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Enter your full name" required />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Enter your phone number" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Which product are you interested in?" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">
                                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </motion.div>
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
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info h2 {
           color: var(--primary);
           margin-bottom: 1rem;
           font-size: 2rem;
        }
        .contact-text {
          margin-bottom: 2.5rem;
          color: var(--text-light);
          font-size: 1.1rem;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .icon-box {
          width: 50px;
          height: 50px;
          background: var(--accent);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: var(--text-dark);
        }
        .info-item p {
          color: var(--secondary);
        }
        .working-hours {
          margin-top: 3rem;
          padding: 2rem;
          background: var(--bg-light);
          border-radius: var(--radius);
          border-left: 4px solid var(--primary);
        }
        .working-hours h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }
        
        .contact-form-wrapper {
          background: var(--white);
          padding: 2.5rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          border: 1px solid #e2e8f0;
        }
        .contact-form h3 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          text-align: center;
          color: var(--text-dark);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #cbd5e1;
          border-radius: 0.5rem;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-light);
        }
        .w-full {
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
