import { progressBar } from './src/widget/progressBar.js';
import './app.css';

document.querySelector('#app').innerHTML = `
  <main id='main'>
  </main>
`
progressBar('main');