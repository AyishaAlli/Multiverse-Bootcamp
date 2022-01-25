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

// function search() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
