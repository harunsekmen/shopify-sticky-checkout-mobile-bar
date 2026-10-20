document.addEventListener('DOMContentLoaded', function() {
  const bar = document.getElementById('shopify-sticky-buy-bar');
  const mainBtn = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
  if (!bar || !mainBtn) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) {
        bar.style.display = 'block';
      } else {
        bar.style.display = 'none';
      }
    });
  }, { threshold: 0.1 });

  observer.observe(mainBtn);
});
