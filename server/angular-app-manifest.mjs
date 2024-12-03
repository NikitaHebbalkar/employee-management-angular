
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 520, hash: 'a23640a0160e16c0c2b227e6f5ba339fd36c6a77ff6457a652abc0c8494ba9f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1033, hash: 'cf97806fb33efdc1f2cfde73e19379b34c852c95f5c83773e96f1382b55f4b20', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
