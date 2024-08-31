const togglerInput = document.querySelectorAll('.toggler__input');

const render = () => {
  togglerInput.forEach((toggler) => {
    if (toggler.checked) {
      toggler.parentElement.querySelector('.toggler__title').textContent = 'On';
    } else {
      toggler.parentElement.querySelector('.toggler__title').textContent = 'Off';
    }
    if (toggler.disabled) {
      toggler.parentElement.querySelector('.toggler__title').textContent = 'Disabled';
    }
  })
}

togglerInput.forEach((input) => {
  input.addEventListener('change', (e) => {
    render();
  })
});