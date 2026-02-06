import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        name: "TENS Therapy Unit",
        description: "Advanced digital TENS machine for effective pain management and muscle stimulation.",
        image: null // Placeholder handled in component
    },
    {
        id: 2,
        name: "Ultrasound Therapy Machine",
        description: "Professional grade ultrasound device for deep tissue heating and healing.",
        image: null
    },
    {
        id: 3,
        name: "Exercise Therapy Bands",
        description: "High-quality resistance bands for strength training and rehabilitation exercises.",
        image: null
    },
    {
        id: 4,
        name: "Hot and Cold Therapy Pack",
        description: "Reusable gel packs offering both cryotherapy and heat therapy solutions.",
        image: null
    },
    {
        id: 5,
        name: "Knee and Back Support Brace",
        description: "Ergonomic supports designed to provide stability and relief for joint pain.",
        image: null
    },
    {
        id: 6,
        name: "Physiotherapy Treatment Table",
        description: "Durable and adjustable treatment bed suitable for all heavy-duty clinical use.",
        image: null
    }
];

const Products = () => {
    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Explore our wide range of physiotherapy equipment</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="catalog-note">
                        <p>Don't see what you're looking for?</p>
                        <p className="sub-note">We have a vast inventory. Contact us for specific requirements.</p>
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
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .catalog-note {
          text-align: center;
          background: #f0fdfa;
          padding: 3rem;
          border-radius: var(--radius);
          border: 1px solid #ccfbf1;
        }
        .catalog-note p {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-dark);
        }
        .catalog-note .sub-note {
          font-size: 1rem;
          font-weight: 400;
          margin-top: 0.5rem;
        }
      `}</style>
        </div>
    );
};

export default Products;
