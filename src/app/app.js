import './app.scss';
import '../widget/progressBar.js';
import { progressBar } from '../widget/progressBar.js';

document.querySelector('#app').innerHTML = `
  <main id='main'>
  </main>
`
progressBar('main');