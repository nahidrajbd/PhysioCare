import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App.jsx';
import { products } from './pages/Products.jsx';
import { faqs } from './data/faq.js';

export { faqs };
export const productList = products.map((product) => ({
  name: product.name,
  description: product.description,
  image: product.image,
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
