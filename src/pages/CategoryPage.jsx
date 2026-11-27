import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from './Products';
import { categories } from '../data/categories';

const CategoryPage = () => {
    const { slug } = useParams();
    const category = categories.find((c) => c.slug === slug);
    if (!category) {
        return (
            <div className="products-page">
                <div className="page-header">
                    <div className="container">
                        <h1>Category Not Found</h1>
                        <p><Link to="/products">Browse all physiotherapy equipment</Link></p>
                    </div>
                </div>
            </div>
        );
    }
    const items = products.filter((product) => category.productIds.includes(product.id));
    const others = categories.filter((c) => c.slug !== slug);
    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>{category.name} in Bangladesh</h1>
                    <p>{items.length} products supplied by PhysioCare BD</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <nav className="breadcrumb-nav">
                        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {category.name}
                    </nav>
                    <div className="products-intro">
                        {category.intro.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p>
                            Physiotherapy equipment should be selected and used under the guidance of a
                            qualified physiotherapist or medical professional. Please read our{" "}
                            <a href="/disclaimer">disclaimer</a> before ordering.
                        </p>
                    </div>
                    <div className="products-grid">
                        {items.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="catalog-note">
                        <p>Buying for a clinic, hospital or in bulk?</p>
                        <p className="sub-note">Call us on +8801818758882 or message on WhatsApp for a special business price.</p>
                    </div>

                    <div className="other-categories">
                        <h2>Other Equipment Categories</h2>
                        <ul>
                            {others.map((other) => (
                                <li key={other.slug}>
                                    <Link to={`/products/${other.slug}`}>{other.name}</Link>
                                </li>
                            ))}
                            <li><Link to="/products">View all 146 products</Link></li>
                        </ul>
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
        .breadcrumb-nav {
          max-width: 820px;
          margin: 0 auto 1.5rem;
          color: var(--text-light);
          font-size: 0.95rem;
        }
        .breadcrumb-nav a { color: var(--primary-dark); font-weight: 600; }
        .products-intro {
          max-width: 820px;
          margin: 0 auto 3rem;
          color: var(--text-light);
          line-height: 1.7;
        }
        .products-intro p { margin-bottom: 1rem; }
        .products-intro a { color: var(--primary-dark); font-weight: 600; }
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
          margin-bottom: 3rem;
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
        .other-categories h2 {
          color: var(--text-dark);
          margin-bottom: 1rem;
          text-align: center;
        }
        .other-categories ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          padding: 0;
        }
        .other-categories a {
          color: var(--primary-dark);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default CategoryPage;
