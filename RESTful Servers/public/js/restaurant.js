const menu = document.querySelector(".menu");
const menuItems = document.getElementsByClassName("menuItems");
const openModal = document.querySelector(".fa-pencil-alt");
const closeModal = document.querySelector(".fa-times");
const form = document.querySelector(".editForm");
//const test = document.getElementById('')


//doesnt work 
// menu.addEventListener("click", () => {
//   for (i = 0; i < menuItems.length; i++) {
//     if (menuItems[i].id === "1") {
//       menuItems[i].classList.toggle("hidden");
//     }

//     //console.log(menuItems[i].id);
//   }
// });

// menu.addEventListener("click", () => {

//     //test.classList.toggle("hidden");
//     console.log(test);

// });

openModal.addEventListener("click", () => {
  console.log("hi");
  form.style.display = "block";
});

closeModal.addEventListener("click", () => {
  form.style.display = "none";
});
