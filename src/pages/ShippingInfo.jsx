const ShippingInfo = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Shipping Information</h1>
                <div className="content">
                    <p>Currently, PhysioCare BD does not support online ordering through this website.</p>

                    <p>Shipping details will be shared directly with customers after order confirmation through phone, email, or WhatsApp.</p>

                    <p>Delivery time and shipping cost may vary based on location and product type.</p>

                    <p>We aim to deliver products safely and on time.</p>
                </div>
            </div>
            <style jsx>{`
        .page-container {
            padding: 4rem 0;
            min-height: 60vh;
        }
        h1 {
            color: var(--text-dark);
            margin-bottom: 2rem;
            font-size: 2.5rem;
            border-bottom: 2px solid var(--primary);
            display: inline-block;
            padding-bottom: 0.5rem;
        }
        .content {
            background: var(--white);
            padding: 2rem;
            border-radius: var(--radius);
            box-shadow: var(--shadow-sm);
        }
        p {
            margin-bottom: 1rem;
            color: var(--text-light);
            line-height: 1.6;
        }
      `}</style>
        </div>
    );
};

export default ShippingInfo;
