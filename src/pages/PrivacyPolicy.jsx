const PrivacyPolicy = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Privacy Policy</h1>
                <div className="content">
                    <p>PhysioCare BD values your privacy and is committed to protecting your personal information.</p>

                    <h3>Information We Collect</h3>
                    <p>We may collect basic information such as your name, phone number, email address, and message details when you contact us through our website, social media, or WhatsApp.</p>

                    <h3>How We Use Your Information</h3>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Respond to your inquiries</li>
                        <li>Provide product details and support</li>
                        <li>Improve our services and communication</li>
                    </ul>

                    <h3>Information Sharing</h3>
                    <p>We do not sell, trade, or share your personal information with third parties.</p>
                    <p>Your information may only be shared if required by law.</p>

                    <h3>Cookies</h3>
                    <p>Our website may use cookies to improve user experience.</p>
                    <p>You can disable cookies anytime from your browser settings.</p>

                    <h3>Data Security</h3>
                    <p>We take reasonable steps to protect your information from unauthorized access or misuse.</p>

                    <h3>Third Party Links</h3>
                    <p>Our website may contain links to other websites.</p>
                    <p>We are not responsible for their content or privacy practices.</p>

                    <h3>Updates</h3>
                    <p>We may update this Privacy Policy from time to time.</p>
                    <p>Any changes will be posted on this page.</p>

                    <h3>Contact Us</h3>
                    <p>If you have any questions, please contact us at:</p>
                    <p>Email: <a href="mailto:sales@physiocarebdplus.com">sales@physiocarebdplus.com</a></p>
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
        a {
            color: var(--primary);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
      `}</style>
        </div>
    );
};

export default PrivacyPolicy;
