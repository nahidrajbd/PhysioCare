const ReturnPolicy = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Return and Refund Policy</h1>
                <div className="content">
                    <p>Returns and refunds are handled on a case by case basis.</p>

                    <p>Customers must contact PhysioCare BD within a reasonable time after receiving the product if there is any issue.</p>

                    <p>Products damaged due to misuse are not eligible for return or refund.</p>

                    <p>Refunds, if approved, will be processed using a suitable method agreed with the customer.</p>

                    <p>Please contact our support team for return or refund related queries.</p>
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

export default ReturnPolicy;
