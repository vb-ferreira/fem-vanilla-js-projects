const doc = document.documentElement;

const toggleDarkMode = (event) => {
  const currentTheme = doc.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  doc.setAttribute('data-theme', newTheme);
}

const toggle = document.getElementById('toggle');

toggle.addEventListener("change", toggleDarkMode);