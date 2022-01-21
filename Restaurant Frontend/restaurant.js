const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menuItems");
const openModal = document.querySelector(".fa-pencil-alt");
const closeModal = document.querySelector(".fa-times");
const form = document.querySelector(".editForm");

menu.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
  console.log("works!:D");
});

openModal.addEventListener("click", () => {
    console.log('hi')
  form.style.display = "block";
});
closeModal.addEventListener("click", () => {
  form.style.display = "none";
});
