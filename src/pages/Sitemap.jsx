import { Link } from 'react-router-dom';

const Sitemap = () => {
    const sections = [
        {
            title: "Main Navigation",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Why Choose Us", path: "/why-choose-us" },
                { name: "Contact Us", path: "/contact" },
            ]
        },
        {
            title: "Customer Service & Legal",
            links: [
                { name: "Shipping Information", path: "/shipping-info" },
                { name: "Return & Refund Policy", path: "/return-policy" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-and-conditions" },
                { name: "Disclaimer", path: "/disclaimer" },
            ]
        }
    ];

    return (
        <div className="page-container">
            <div className="container">
                <h1>Sitemap</h1>
                <p className="subtitle">Overview of our website structure</p>

                <div className="sitemap-grid">
                    {sections.map((section, index) => (
                        <div key={index} className="sitemap-section">
                            <h2>{section.title}</h2>
                            <ul className="sitemap-list">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .page-container {
          padding: 4rem 0;
          min-height: 60vh;
        }
        h1 {
            color: var(--text-dark);
            margin-bottom: 0.5rem;
            font-size: 2.5rem;
        }
        .subtitle {
            color: var(--text-light);
            margin-bottom: 3rem;
            font-size: 1.1rem;
        }
        .sitemap-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }
        .sitemap-section {
            background: var(--white);
            padding: 2rem;
            border-radius: var(--radius);
            box-shadow: var(--shadow-sm);
            border-top: 4px solid var(--primary);
        }
        h2 {
            color: var(--text-dark);
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 0.75rem;
        }
        .sitemap-list {
            list-style: none;
            padding: 0;
        }
        .sitemap-list li {
            margin-bottom: 0.75rem;
        }
        .sitemap-list a {
            color: var(--secondary);
            text-decoration: none;
            font-size: 1.1rem;
            transition: color 0.2s, padding-left 0.2s;
            display: block;
        }
        .sitemap-list a:hover {
            color: var(--primary);
            padding-left: 0.5rem;
        }

        @media (max-width: 600px) {
            .sitemap-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default Sitemap;
