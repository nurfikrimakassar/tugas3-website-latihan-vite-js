import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { clickButton } from './clickButton.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
        <p id="text"></p>
        <button id="button">Klik</button>
  </div>
`

clickButton(document.querySelector('#button'), document.querySelector('#text'))
setupCounter(document.querySelector('#counter'))
