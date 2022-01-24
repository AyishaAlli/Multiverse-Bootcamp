const menu = document.querySelector(".menu");
const menuItems = document.getElementsByClassName("menuItems");
const openModal = document.querySelector(".fa-pencil-alt");
const closeModal = document.querySelector(".fa-times");
const form = document.querySelector(".editForm");
//const test = document.getElementById('')

const editBtns = document.querySelector(".editBtns");
const exitForm = document.getElementById("exitForm");

// ADD BBUTTONS
const addMenuItemBtn = document.getElementById("addMenuItemBtn");
const addMenuItemForm = document.querySelector(".addMenuItemForm");

//  EDIT FORM BUTTOMS
const editRestaurantDetails = document.getElementById("editDetails");
const editMenus = document.getElementById("editMenus");
const editMenuItems = document.getElementById("editMenuItems");

// FORMS
const allForms = document.querySelector(".forms");
const restaurantDetailsForm = document.querySelector(".restaurantDetails");
const menusForm = document.querySelector(".restaurantMenus");
const menuItemsForm = document.querySelector(".restaurantMenuItems");

//Selecting the Add Menu Item Button
addMenuItemBtn.addEventListener("click", function () {
  editBtns.style.display = "none"; // gets rid off edit buttons
  allForms.classList.remove("hidden"); // makes form container appear
  addMenuItemForm.classList.remove('hidden')
});

// Selecting the right Form that you want to edit
editRestaurantDetails.addEventListener("click", function () {
  editBtns.style.display = "none"; // gets rid off edit buttons
  allForms.classList.remove("hidden"); // makes form container appear
  restaurantDetailsForm.classList.remove("hidden"); //  // makes restaurant form appear
});

editMenus.addEventListener("click", function () {
  editBtns.style.display = "none"; // gets rid off edit buttons
  allForms.classList.remove("hidden"); // makes form container appear
  menusForm.classList.remove("hidden"); //  // makes restaurant form appear
});

editMenuItems.addEventListener("click", function () {
  editBtns.style.display = "none"; // gets rid off edit buttons
  allForms.classList.remove("hidden"); // makes form container appear
  menuItemsForm.classList.remove("hidden"); //  // makes restaurant form appear
});

exitForm.addEventListener("click", function () {
  editBtns.style.display = "flex"; // bring back edit buttons
  allForms.classList.add("hidden"); // hides forms
  restaurantDetailsForm.classList.add("hidden"); //hides restaurant details form
  menusForm.classList.add("hidden");
  addMenuItemForm.classList.add('hidden')
});

openModal.addEventListener("click", () => {
  console.log("hi");
  form.style.display = "block";
});

closeModal.addEventListener("click", () => {
  editBtns.style.display = "flex";
  allForms.classList.add("hidden");
  restaurantDetailsForm.classList.add("hidden");
  form.style.display = "none";
});

