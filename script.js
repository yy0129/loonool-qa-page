// You can add JavaScript for functionality such as expanding/collapsing FAQ items, etc.
// For example:

document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item h3');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });
});

