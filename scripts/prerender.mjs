// Post-build SEO pass for physiocarebdplus.com (Vite + React Router SPA on
// Cloudflare Pages). Runs after `vite build` and the SSR build
// (`vite build --ssr src/entry-server.jsx --outDir dist-server`):
//   1. For every public route, writes a FLAT dist/<route>.html file (the
//      homepage is dist/index.html) with that route's own title, meta
//      description, self-canonical and OG/Twitter URL, title and
//      description, plus the route's real rendered page content inside
//      #root, so the raw HTML is unique, indexable and readable by
//      crawlers that do not run JavaScript. Flat files matter:
//      Cloudflare Pages serves dist/<route>.html at /<route> with a
//      200, while a dist/<route>/index.html directory makes /<route>
//      308-redirect to /<route>/, which conflicts with the slash-free
//      canonicals and caused Search Console redirect and duplicate
//      canonical notices. The homepage keeps the meta already present
//      in index.html and is only verified.
//   2. Writes dist/robots.txt and dist/sitemap.xml covering all public
//      routes on the canonical www host.
//   3. Writes dist/404.html, a standalone not-found page. Cloudflare Pages
//      serves 404.html with a real 404 status for unmatched URLs. No
//      catch-all _redirects rule is added: the app relies on client-side
//      routing, and a splat 404 redirect could break its routes.
//
// Copy rule: titles and descriptions below only restate what each page and
// the business already say about themselves. No prices, specs, medical or
// treatment claims, guarantees, hours or ratings are introduced.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const { render, faqs, productList } = await import("../dist-server/entry-server.js");

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, "dist");
const SITE = "https://www.physiocarebdplus.com";
const LASTMOD = new Date().toISOString().slice(0, 10);

const ROUTES = [
  {
    path: "/",
    changefreq: "daily",
    priority: "1.0",
    // Homepage meta lives in index.html and is verified, not replaced.
    title: "PhysioCare BD - Physiotherapy Machine & Equipment Price in Bangladesh",
  },
  {
    path: "/about",
    crumb: "About Us",
    changefreq: "monthly",
    priority: "0.8",
    title: "About PhysioCare BD | Physiotherapy Equipment Supplier in Bangladesh",
    description:
      "Learn about PhysioCare BD, a physiotherapy and rehabilitation equipment supplier in Bangladesh, founded by CEO Md. Kamruzzaman Sumon.",
  },
  {
    path: "/products",
    crumb: "Products",
    changefreq: "weekly",
    priority: "0.9",
    title: "Physiotherapy Machines & Equipment in Bangladesh | PhysioCare BD",
    description:
      "Browse TENS, ultrasound, shockwave, traction, therapy beds and rehabilitation equipment from PhysioCare BD, supplied to clinics across Bangladesh.",
  },
  {
    path: "/why-choose-us",
    crumb: "Why Choose Us",
    changefreq: "monthly",
    priority: "0.7",
    title: "Why Choose PhysioCare BD | Physiotherapy Equipment Supplier",
    description:
      "Quality tested physiotherapy equipment, nationwide delivery and professional support. Why hospitals and clinics in Bangladesh choose PhysioCare BD.",
  },
  {
    path: "/contact",
    crumb: "Contact Us",
    changefreq: "monthly",
    priority: "0.8",
    title: "Contact PhysioCare BD | Physiotherapy Equipment Supplier, Dhaka",
    description:
      "Contact PhysioCare BD in Uttara, Dhaka by WhatsApp, phone or email for physiotherapy equipment prices and enquiries anywhere in Bangladesh.",
  },
  {
    path: "/privacy-policy",
    crumb: "Privacy Policy",
    changefreq: "yearly",
    priority: "0.5",
    title: "Privacy Policy | PhysioCare BD Plus",
    description: "Read the privacy policy of PhysioCare BD Plus (physiocarebdplus.com).",
  },
  {
    path: "/terms-and-conditions",
    crumb: "Terms and Conditions",
    changefreq: "yearly",
    priority: "0.5",
    title: "Terms and Conditions | PhysioCare BD Plus",
    description: "Read the terms and conditions of PhysioCare BD Plus (physiocarebdplus.com).",
  },
  {
    path: "/disclaimer",
    crumb: "Disclaimer",
    changefreq: "yearly",
    priority: "0.5",
    title: "Disclaimer | PhysioCare BD Plus",
    description: "Read the disclaimer of PhysioCare BD Plus (physiocarebdplus.com).",
  },
  {
    path: "/shipping-info",
    crumb: "Shipping Information",
    changefreq: "yearly",
    priority: "0.6",
    title: "Shipping Information | PhysioCare BD Plus",
    description:
      "Shipping and delivery information for orders from PhysioCare BD Plus, supplying physiotherapy and rehabilitation equipment across Bangladesh.",
  },
  {
    path: "/return-policy",
    crumb: "Return Policy",
    changefreq: "yearly",
    priority: "0.6",
    title: "Return Policy | PhysioCare BD Plus",
    description: "Read the return and refund policy of PhysioCare BD Plus (physiocarebdplus.com).",
  },
  {
    path: "/sitemap",
    crumb: "Sitemap",
    changefreq: "yearly",
    priority: "0.3",
    title: "Sitemap | PhysioCare BD Plus",
    description: "Browse all pages of the PhysioCare BD Plus website in one list.",
  },
];

function replaceOnce(html, regex, replacement, label, routePath) {
  if (!regex.test(html)) {
    throw new Error(`prerender: could not find ${label} while building ${routePath}`);
  }
  return html.replace(regex, replacement);
}

function applyRouteMeta(shell, route) {
  const url = route.path === "/" ? `${SITE}/` : `${SITE}${route.path}`;
  let html = shell;
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`, "title", route.path);
  html = replaceOnce(
    html,
    /<meta name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${route.description}" />`,
    "meta description",
    route.path
  );
  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
    "canonical",
    route.path
  );
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url", route.path);
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`, "og:title", route.path);
  html = replaceOnce(
    html,
    /<meta property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${route.description}" />`,
    "og:description",
    route.path
  );
  html = replaceOnce(html, /<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`, "twitter:url", route.path);
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`, "twitter:title", route.path);
  html = replaceOnce(
    html,
    /<meta name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${route.description}" />`,
    "twitter:description",
    route.path
  );
  return html;
}

// --- 1. Per-route HTML -------------------------------------------------------
const indexPath = path.join(distDir, "index.html");
const shell = fs.readFileSync(indexPath, "utf8");

if (!shell.includes(`<link rel="canonical" href="${SITE}/" />`)) {
  throw new Error("prerender: homepage self-canonical missing from built index.html");
}
if (!shell.includes('"@type": "Organization"') || !shell.includes('"@type": "Store"') || !shell.includes('"@type": "WebSite"')) {
  throw new Error("prerender: JSON-LD @graph missing from built index.html");
}
console.log("prerender: homepage meta verified");

for (const route of ROUTES) {
  const withMeta = route.path === "/" ? shell : applyRouteMeta(shell, route);
  const content = render(route.path);
  if (!content || content.length < 200) {
    throw new Error(`prerender: rendered content too short for ${route.path}`);
  }
  let html = withMeta.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  const extras = [];
  if (route.path !== "/") {
    const url = `${SITE}${route.path}`;
    extras.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: route.crumb, item: url },
      ],
    });
  }
  if (route.path === "/") {
    extras.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }
  if (route.path === "/products") {
    extras.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Physiotherapy Machines and Equipment",
      numberOfItems: productList.length,
      itemListElement: productList.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.image ? `${SITE}${product.image}` : undefined,
          brand: { "@type": "Brand", name: "PhysioCare BD" },
        },
      })),
    });
  }
  if (extras.length) {
    const scripts = extras
      .map((schema) => `  <script type="application/ld+json">${JSON.stringify(schema)}</script>`)
      .join("\n");
    html = html.replace("</head>", `${scripts}\n</head>`);
  }
  if (html === withMeta) {
    throw new Error(`prerender: could not inject rendered content for ${route.path}`);
  }
  const outFile =
    route.path === "/" ? indexPath : path.join(distDir, `${route.path.slice(1)}.html`);
  fs.writeFileSync(outFile, html);
  console.log(`prerender: wrote ${route.path} (${html.length} bytes, content rendered)`);
}

// --- 2. robots.txt + sitemap.xml ---------------------------------------------
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, "robots.txt"), robots);

const urls = ROUTES.map((route) => {
  const loc = route.path === "/" ? `${SITE}/` : `${SITE}${route.path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log("prerender: wrote robots.txt and sitemap.xml");

// --- 3. Standalone 404 page ----------------------------------------------------
const notFound = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>Page Not Found | PhysioCare BD Plus</title>
    <meta name="description" content="The page you are looking for could not be found. Return to the PhysioCare BD Plus homepage." />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <style>
      body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; background: #f7fafc; color: #1f2937; display: flex; min-height: 100vh; align-items: center; justify-content: center; }
      main { text-align: center; padding: 2rem; max-width: 34rem; }
      .code { font-size: 4rem; font-weight: 700; color: #1d6fb8; margin: 0; }
      h1 { font-size: 1.75rem; margin: 0.5rem 0 1rem; }
      p { line-height: 1.7; margin: 0 0 1.5rem; }
      a { display: inline-block; background: #1d6fb8; color: #fff; text-decoration: none; padding: 0.75rem 1.75rem; border-radius: 9999px; font-weight: 600; margin: 0 0.25rem; }
    </style>
  </head>
  <body>
    <main>
      <p class="code">404</p>
      <h1>Page not found</h1>
      <p>Sorry, the page you are looking for could not be found or has been moved.</p>
      <a href="/">Back to homepage</a>
      <a href="/products">Browse products</a>
    </main>
  </body>
</html>
`;
fs.writeFileSync(path.join(distDir, "404.html"), notFound);
console.log("prerender: wrote 404.html");
console.log("prerender done");
