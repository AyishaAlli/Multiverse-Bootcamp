const addMenuBtn = document.getElementById("addMenuBtn");
const menuListElement = document.querySelector(".menuItems");
const menuItemElement = document.createElement("li");

// Gets Restaurant Titles Name
console.log(document.getElementById("menuTitles").value);

// HOW TO ADD MENU ITEM TO SPECIFIC MENU ????

//DELETE RESTAURANT

function deleteRestaurant(restaurantId) {
  //const url = '/restaurants/'+ restaurantId

  fetch("/restaurants/" + restaurantId, { method: "DELETE" })
    .then((res) => {
      res.json();
    })
    .catch(function (err) {
      console.error(err);
    });
}


