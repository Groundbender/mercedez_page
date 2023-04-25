const tabHandlers = document.querySelectorAll("[data-tabs-handler]");
const tabContent = document.querySelectorAll("[data-tabs-field]");

tabHandlers.forEach((tabBtn) => {
  tabBtn.addEventListener("click", (e) => {
    tabHandlers.forEach((btn) =>
      btn.classList.remove("design-list__item_active")
    );
    tabBtn.classList.add("design-list__item_active");

    tabContent.forEach((content) => {
      if (content.dataset.tabsField === tabBtn.dataset.tabsHandler) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
});
