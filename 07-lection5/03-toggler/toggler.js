(function changeTogglerTitle() {
  const togglerInputs = document.querySelectorAll('.toggler__input');
  const inputs = Array.from(togglerInputs);

  const render = () => {
    for (const toggler of inputs) {
      if (toggler.parentElement.classList.contains('toggler_theme-changer') ||
      toggler.parentElement.classList.contains('toggler_darkmode')) {
        continue;
      }
      if (toggler.checked) {
        toggler.parentElement.querySelector('.toggler__title').textContent = 'On';
      } else {
        toggler.parentElement.querySelector('.toggler__title').textContent = 'Off';
      }
      if (toggler.disabled) {
        toggler.parentElement.querySelector('.toggler__title').textContent = 'Disabled';
      }
    }
  }

  togglerInputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      render();
    })
  });
})();

