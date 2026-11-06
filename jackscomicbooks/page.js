const copyButton = document.querySelector('#copy-link');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('https://gainstreetstrategy.com/jackscomicbooks');
      status.textContent = 'Link copied. Thanks for sharing!';
    } catch {
      status.textContent = 'You can copy the address from your browser to share this page.';
    }
  });
}
