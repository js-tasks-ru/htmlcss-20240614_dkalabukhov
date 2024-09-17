(function changeRadioTitle() {
  const radioInput = document.querySelectorAll('.radio__input');

  const render = () => {
    radioInput.forEach((radio) => {
      if (radio.checked) {
        radio.parentElement.querySelector('.radio__title').textContent = 'Selected';
      } else {
        radio.parentElement.querySelector('.radio__title').textContent = 'Default';
      }
      if (radio.disabled) {
        radio.parentElement.querySelector('.radio__title').textContent = 'Disabled';
      }
    })
  }

  radioInput.forEach((input) => {
    input.addEventListener('change', (e) => {
      render();
    })
  });
})();

