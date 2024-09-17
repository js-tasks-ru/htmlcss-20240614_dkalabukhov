(function changeCheckboxTitle() {
  const checkboxes = document.querySelectorAll('.checkbox__input');

  const render = () => {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.parentElement.querySelector('.checkbox__title').textContent = 'Checked';
      } else {
        checkbox.parentElement.querySelector('.checkbox__title').textContent = 'Default';
      }
      if (checkbox.disabled) {
        checkbox.parentElement.querySelector('.checkbox__title').textContent = 'Disabled';
      }
    })
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      render();
    })
  })
})();