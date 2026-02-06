import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        name: "KS08 Knee Open Patella",
        description: "Adjustable knee support with open patella design for stability and comfort.",
        image: null
    },
    {
        id: 2,
        name: "WS01 Coccyx Support Splint",
        description: "Specialized seating support for coccyx relief and posture correction.",
        image: null
    },
    {
        id: 3,
        name: "GP02 Ladies Heel Cushion",
        description: "Soft silicone heel cushions designed to relieve heel pain and pressure.",
        image: null
    },
    {
        id: 4,
        name: "WS06 Thumb Support",
        description: "Stabilizing support for thumb injuries and sprains.",
        image: null
    },
    {
        id: 5,
        name: "FA01 Arm Sling",
        description: "Comfortable arm sling for immobilization and support during recovery.",
        image: null
    },
    {
        id: 6,
        name: "KS04 Knee Support M",
        description: "Medium compression knee support for daily use and mild strain.",
        image: null
    },
    {
        id: 7,
        name: "KS18 Tubular Knee Support",
        description: "Seamless tubular knee support for uniform compression.",
        image: null
    },
    {
        id: 8,
        name: "WS11 Wrist & Forearm Brace",
        description: "Rigid brace for wrist and forearm stabilization.",
        image: null
    },
    {
        id: 9,
        name: "Hand IRR Lamp",
        description: "Portable infrared lamp for localized heat therapy.",
        image: null
    },
    {
        id: 10,
        name: "Stand IRR Luminous",
        description: "Adjustable stand infrared lamp for professional clinical use.",
        image: null
    },
    {
        id: 11,
        name: "Advance TENS 6 Channel",
        description: "High-performance 6-channel TENS unit for multi-site pain management.",
        image: null
    },
    {
        id: 12,
        name: "UST Beauty Double Head",
        description: "Ultrasonic therapy device with double heads for versatile applications.",
        image: null
    },
    {
        id: 13,
        name: "TENS 04 Channel EV-906",
        description: "Digital 4-channel TENS/EMS unit for effective stimulation.",
        image: null
    },
    {
        id: 14,
        name: "TENS China Leawell",
        description: "Reliable TENS unit for home and clinical physiotherapy.",
        image: null
    },
    {
        id: 15,
        name: "Medical Device",
        description: "General purpose certified medical equipment.",
        image: null
    },
    {
        id: 16,
        name: "UST Head China",
        description: "Replacement ultrasound head for compatible therapy units.",
        image: null
    },
    {
        id: 17,
        name: "Comfy Stim-806",
        description: "User-friendly electrical stimulator for pain relief.",
        image: null
    },
    {
        id: 18,
        name: "04 Channel TENS Cable",
        description: "High-quality connecting cables for 4-channel TENS machines.",
        image: null
    },
    {
        id: 19,
        name: "Bosu Ball Big",
        description: "Large balance trainer for core stability and rehabilitation exercises.",
        image: null
    },
    {
        id: 20,
        name: "Bosu Ball Small",
        description: "Compact balance trainer suitable for targeted stability workouts.",
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
          background: var(--primary-light);
          padding: 3rem;
          border-radius: var(--radius);
          border: 1px solid var(--primary-light);
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
