const collapsBtn = document.querySelector(".m-btn");
const menu = document.querySelector(".menu");
collapsBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
