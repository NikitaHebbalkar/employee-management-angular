
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 459, hash: '297b40a854cac4255ff57163ac6c8e3f423d89891979200a3dad8541697f2c19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 972, hash: 'be134bfd8b9da4346897f8c612c160b325d641ba96f675b40d91b85c0342769b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
