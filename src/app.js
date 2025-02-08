import { progressBar } from './widget/progressBar.js';
import './app.scss';

document.querySelector('#app').innerHTML = `
  <main id='main'>
  </main>
`
progressBar('main');