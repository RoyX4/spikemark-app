// Runs before the first paint, so a saved theme never flashes the other one when the app opens. A file of its own: the
// app's Content-Security-Policy allows no inline script. Keep in step with src/app/theme.ts.
(function () {
  var saved = null;
  try {
    saved = localStorage.getItem('spikemark.theme');
  } catch (e) {
    /* storage unavailable: the default theme */
  }
  var theme = saved === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  var bar = document.querySelector('meta[name="theme-color"]');
  if (bar) bar.setAttribute('content', theme === 'light' ? '#fafafc' : '#222224');
})();
