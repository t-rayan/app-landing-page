const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".hide-mobile");
menuBtn.addEventListener("click", toggleMenu);

//toggling menu
function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.style.backgroundColor = "red";
  } else {
    menu.style.display = "none";
  }
}
