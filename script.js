// Optional: Scroll progress bar
window.addEventListener('scroll', () => {
  const progress = document.getElementById("progress");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  progress.style.width = `${scrolled}%`;
});
