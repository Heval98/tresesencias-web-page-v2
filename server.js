const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

// Enable gzip/deflate compression for responses
app.use(compression());

// Simple cache-control policy: index.html (SPA) is not cached, other assets get long cache
app.use((req, res, next) => {
  if (req.path === '/' || req.path.endsWith('index.html')) {
    res.setHeader('Cache-Control', 'no-cache');
  } else {
    // hashed filenames produced by angular build are safe for long cache
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  next();
});

const distFolder = path.join(__dirname, 'dist', 'tresesencias-web-page-v2');

// Serve pre-compressed files if available (.br or .gz)
app.get('*', (req, res, next) => {
  const accept = req.headers['accept-encoding'] || '';
  const requestedPath = path.join(distFolder, req.path);

  if (accept.includes('br') && fs.existsSync(requestedPath + '.br')) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', getContentType(req.path));
    return res.sendFile(requestedPath + '.br');
  }

  if (accept.includes('gzip') && fs.existsSync(requestedPath + '.gz')) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', getContentType(req.path));
    return res.sendFile(requestedPath + '.gz');
  }

  next();
});

// Serve static files (no index auto-send so SPA fallback works)
app.use(express.static(distFolder, {
  index: false
}));

// SPA fallback - serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serving ${distFolder} on http://localhost:${port} (compression enabled)`);
});

function getContentType(urlPath) {
  if (!urlPath) return 'application/octet-stream';
  if (urlPath.endsWith('.js')) return 'application/javascript; charset=UTF-8';
  if (urlPath.endsWith('.css')) return 'text/css; charset=UTF-8';
  if (urlPath.endsWith('.html')) return 'text/html; charset=UTF-8';
  if (urlPath.endsWith('.json')) return 'application/json; charset=UTF-8';
  if (urlPath.endsWith('.svg')) return 'image/svg+xml';
  if (urlPath.endsWith('.woff2')) return 'font/woff2';
  if (urlPath.endsWith('.woff')) return 'font/woff';
  if (urlPath.endsWith('.ttf')) return 'font/ttf';
  if (urlPath.endsWith('.png')) return 'image/png';
  if (urlPath.endsWith('.jpg') || urlPath.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}
