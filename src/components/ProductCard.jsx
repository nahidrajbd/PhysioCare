import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, hideAction }) => {
  return (
    <motion.div
      className="card product-card"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="card-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="placeholder-image">
            <span>Image Coming Soon</span>
          </div>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
        {!hideAction && (
          <Link to="/contact" className="card-link">
            Inquire Now <ArrowRight size={16} />
          </Link>
        )}
      </div>

      <style jsx>{`
        .product-card {
          padding: 0;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .card-image {
          height: 200px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .card-image img {
          transform: scale(1.05);
        }
        .placeholder-image {
          color: #94a3b8;
          font-weight: 500;
        }
        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }
        .card-desc {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          flex: 1;
        }
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: gap 0.3s;
        }
        .card-link:hover {
          gap: 0.75rem;
        }
      `}</style>
    </motion.div>
  );
};

export default ProductCard;
