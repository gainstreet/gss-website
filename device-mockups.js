(() => {
const stages = document.querySelectorAll('[data-device-width]');
const fit = el => el.style.setProperty('--device-scale', el.clientWidth / Number(el.dataset.deviceWidth));
stages.forEach(fit);
if ('ResizeObserver' in window) {
const observer = new ResizeObserver(entries => entries.forEach(({target}) => fit(target)));
stages.forEach(el => observer.observe(el));
} else { window.addEventListener('resize', () => stages.forEach(fit)); }
})();