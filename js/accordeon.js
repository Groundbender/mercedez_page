const btnsWrapper = document.querySelector(".feature-list");
btnsWrapper.addEventListener("click", (e) => {
  if (e.target.closest("button").classList.contains("feature__link_active")) {
    e.target.closest("button").classList.remove("feature__link_active");
    e.target
      .closest(".feature__item")
      .querySelector(".feature-sub")
      .classList.add("hidden");
  } else {
    e.target.closest("button").classList.add("feature__link_active");
    e.target
      .closest(".feature__item")
      .querySelector(".feature-sub")
      .classList.remove("hidden");
  }
});
