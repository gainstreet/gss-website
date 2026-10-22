(() => {
  'use strict';
  const video = document.getElementById('hero-video');
  const button = document.querySelector('.hero-video-toggle');
  if (!video || !button) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let userPaused = false;
  let failed = false;
  const allowed = () => !motion.matches && !connection?.saveData;
  const setLabel = () => {
    button.textContent = video.paused ? 'Play background video' : 'Pause background video';
  };
  function play() {
    if (!allowed() || userPaused || failed || document.hidden) return;
    video.muted = true;
    video.autoplay = true;
    const attempt = video.play();
    if (attempt?.catch) attempt.catch(() => {
      // A browser may require a gesture. The poster and play button remain usable.
      setLabel();
    });
  }
  function applyPreference() {
    if (!allowed()) {
      video.autoplay = false;
      video.pause();
      video.classList.remove('is-visible');
      button.hidden = true;
      if (video.hasAttribute('src')) {
        video.removeAttribute('src');
        video.load();
      }
      return;
    }
    if (failed) return;
    if (!video.hasAttribute('src')) {
      video.autoplay = !userPaused && !document.hidden;
      video.src = video.dataset.src;
      video.load();
    }
    button.hidden = false;
    play();
  }
  video.addEventListener('playing', () => {
    if (!allowed()) return;
    video.classList.add('is-visible');
    setLabel();
  });
  video.addEventListener('pause', setLabel);
  video.addEventListener('error', () => {
    failed = true;
    video.classList.remove('is-visible');
    button.hidden = true;
  });
  button.addEventListener('click', () => {
    if (video.paused) {
      userPaused = false;
      play();
    } else {
      userPaused = true;
      video.autoplay = false;
      video.pause();
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause(); else play();
  });
  window.addEventListener('pageshow', applyPreference);
  if (motion.addEventListener) motion.addEventListener('change', applyPreference);
  else motion.addListener(applyPreference);
  connection?.addEventListener?.('change', applyPreference);
  applyPreference();
})();
