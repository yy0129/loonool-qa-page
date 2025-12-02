const faqButtons = document.querySelectorAll(".faq-title");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
  });
});
