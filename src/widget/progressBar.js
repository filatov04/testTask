

export function progressBar(nameId){
  document.querySelector(nameId).innerHTML = `
    <article class='progress-bar'>
      <div class='progress-bar__progress-bar'>
        <div id='circularBar'>
        </div>
        <div>
        </div>
      </div>
      <div class=progress-bar__parameter>
        <label class=progress-bar__value><input id='inpValProg' value='100' type='number'/> Value</label>

        <div class="progress-bar__toggle-container toggle-container">
          <label class="toggle-container__switch">
            <input type="checkbox" id="animateToggle">
            <span class="toggle-container__slider"></span>
          </label>
          <span class="toggle-container__label">Animate</span>
        </div>

        <div class="progress-bar__toggle-container toggle-container">
          <label class="toggle-container__switch">
            <input type="checkbox" id="hideToggle">
            <span class="toggle-container__slider"></span>
          </label>
          <span class="toggle-container__label">Hide</span>
        </div>

      </div>
    </article>
  `
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("animateToggle");
    const circular = document.querySelector(".progress-bar__progress-bar");
    const hide = document.getElementById('hideToggle');
    const barProg = document.getElementById('circularBar');
  
    toggle.addEventListener("change", function () {
      circular.classList.toggle("animation", this.checked);
    });

    document.getElementById('inpValProg').addEventListener('keydown', updateProgress);
    document.getElementById('inpValProg').addEventListener('blur', updateProgress);
    
    function updateProgress(event) {
      if (event.type === 'keydown' && event.key !== 'Enter') {
        return;
      }
  
      if (this.value >= 0 && this.value <= 100) {
        barProg.style.background = `conic-gradient(#007bff ${3.6 * this.value}deg, white 0deg)`;
      }
    }

    hide.addEventListener("change", function(){
      circular.classList.toggle('hide', this.checked)
    });

  });
}



