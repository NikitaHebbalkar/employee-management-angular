
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 507, hash: '7ea23c47f9c84a1f5235baf0c97f63dbe67b646641cbe5635b66a0904072c1f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1020, hash: '0dbf59b507e9d3b6dd14af5210502968dea52d02e99dda7c9f25b70a99b3ea77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
