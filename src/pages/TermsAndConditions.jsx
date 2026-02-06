const TermsAndConditions = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Terms and Conditions</h1>
                <div className="content">
                    <p>By accessing and using this website, you agree to follow these terms and conditions.</p>

                    <ul>
                        <li>All content on this website is for general information only. Product details may change without notice.</li>
                        <li>You agree not to misuse the website or use it for unlawful purposes.</li>
                    </ul>

                    <p>PhysioCare BD reserves the right to update or change these terms at any time without prior notice.</p>

                    <p>Continued use of the website means you accept the updated terms.</p>
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
        ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-light);
        }
        li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
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

export default TermsAndConditions;
