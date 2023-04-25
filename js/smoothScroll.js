const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const newArr = [...linksHead, mainScroll];

newArr.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let blockID = link.getAttribute("href");
    console.log(blockID);
    document.querySelector(String(blockID)).scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
});
