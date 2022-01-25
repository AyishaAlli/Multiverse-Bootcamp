// Opens form to add new restaurant
const openForm = document.getElementById("openForm");
const addRestaurantForm = document.querySelector(".addRestaurantForm");
const submitForm = document.getElementById("addRestaurantBtn");

openForm.addEventListener("click", () => {
  addRestaurantForm.style.display = "flex";
});
closeForm.addEventListener("click", () => {
  addRestaurantForm.style.display = "none";
});

// // ADD NEW RESTAURANT
// function addRestaurant() {
//   fetch("/restaurants", { method: "POST" })
//     .then((res) => {
//       res.send(formData);
//       location.href = "/restaurants";
//     })
//     .catch(function (err) {
//       console.error(err);
//     });
// }


