import { progressBar } from './src/widget/progressBar.js';

document.querySelector('#app').innerHTML = `
  <main id='main'>
  </main>
`
progressBar('main');