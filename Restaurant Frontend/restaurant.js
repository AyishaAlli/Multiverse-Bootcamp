const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menuItems");

menu.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
  console.log("works!:D");
});
