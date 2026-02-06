const Disclaimer = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Disclaimer</h1>
                <div className="content">
                    <p>All information provided on this website is for general knowledge only.</p>

                    <p>PhysioCare BD does not provide medical advice. Product usage should follow professional guidance when needed.</p>

                    <p>We are not responsible for any loss or damage caused by improper use of information or products shown on this website.</p>

                    <p>Images and product descriptions are for display purposes. Actual products may vary slightly.</p>
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

export default Disclaimer;
