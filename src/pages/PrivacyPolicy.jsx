const PrivacyPolicy = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Privacy Policy</h1>
                <div className="content">
                    <p><strong>PhysioCare BD respects your privacy.</strong></p>
                    <p>We collect basic information such as name, phone number, email address, and message details when you contact us through our website or social media.</p>

                    <h3>We use this information only to:</h3>
                    <ul>
                        <li>Respond to your inquiry</li>
                        <li>Provide product information</li>
                        <li>Improve our service</li>
                    </ul>

                    <p>We do not sell or share your personal information with third parties, except when required by law.</p>

                    <p>Our website may use cookies to improve user experience. You can choose to disable cookies in your browser.</p>

                    <p>By using our website, you agree to this Privacy Policy.</p>
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
        h3 {
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }
        ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-light);
        }
        li {
            margin-bottom: 0.5rem;
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

export default PrivacyPolicy;
