
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;
toggle.onclick = () => {
  root.classList.toggle('dark')
}