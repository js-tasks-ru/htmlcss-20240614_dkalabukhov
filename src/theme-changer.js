const themeChanger = document.getElementById('theme-changer');
const darkMode = document.getElementById('dark-mode');
const html = document.documentElement;

const state = {
  darkTheme: false,
}

const toggleThemeAndAttributes = () => {
  html.toggleAttribute('data-theme-dark');
  if (state.darkTheme) {
    darkMode.setAttribute('checked', '');
    themeChanger.setAttribute('checked', '')
  } else {
    darkMode.removeAttribute('checked');
    themeChanger.removeAttribute('checked');
  }
};

themeChanger.addEventListener('change', () => {
  state.darkTheme = themeChanger.checked ? true : false;
  toggleThemeAndAttributes();
});

darkMode.addEventListener('change', () => {
  state.darkTheme = darkMode.checked ? true : false;
  toggleThemeAndAttributes();
});