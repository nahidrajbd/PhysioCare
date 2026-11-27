import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App.jsx';
import { products } from './pages/Products.jsx';
import { faqs, productFaqs } from './data/faq.js';
import { categories } from './data/categories.js';

export { faqs, productFaqs, categories };
export const productList = products.map((product) => ({
  id: product.id,
  name: product.name,
  description: product.description,
  image: product.image,
  price: product.price,
  priceFrom: product.priceFrom,
}));

// Used only at build time by scripts/prerender.mjs to write the real
// page content into each route's static HTML file.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}

export const routes = [
  '/',
  '/about',
  '/products',
  '/why-choose-us',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
  '/shipping-info',
  '/return-policy',
  '/sitemap',
];
