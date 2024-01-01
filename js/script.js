const navTElement = document.querySelector(".menu_icon");
const flexContainer = document.querySelector(".nav-t");
const listItem = document.querySelectorAll(".li");
navTElement.addEventListener("click", () => {
  flexContainer.classList.toggle("nav-t_open");
});
listItem.forEach((liItem) => {
  liItem.addEventListener("click", () => {
    flexContainer.classList.remove("nav-t_open");
  });
});