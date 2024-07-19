const checkbox = document.querySelector('.checkbox__input');
const checkboxTitle = document.querySelector('.checkbox__title');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    checkboxTitle.textContent = 'Checked';
  }
  else checkboxTitle.textContent = 'Default';
})
