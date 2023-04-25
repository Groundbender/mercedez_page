const btnsWrapper = document.querySelector(".feature-list");
const btns = btnsWrapper.querySelectorAll(".feature__link");
const list = btnsWrapper.querySelectorAll(".feature-sub");

btnsWrapper.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    let button = e.target.closest("button");
    let content = e.target
      .closest(".feature__item")
      .querySelector(".feature-sub");
    btns.forEach((btn, index) => {
      if (button === btn) {
        btn.classList.toggle("feature__link_active");
        list[index].classList.toggle("hidden");
      } else {
        btn.classList.remove("feature__link_active");
        list[index].classList.add("hidden");
      }
    });
  }
});
