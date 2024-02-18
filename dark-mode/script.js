// 1
const doc = document.documentElement; // <html>

// 3
const check = document.getElementById('toggle');

check.addEventListener('change', () => {
  // 2
  const mode = doc.getAttribute('data-theme');
  // 4
  if (mode === 'dark') {
    doc.setAttribute('data-theme', 'light');
  } else {
    doc.setAttribute('data-theme', 'dark');
  }
});