// Opens form to add new restaurant 
const openForm = document.getElementById('openForm');
const addRestaurantForm = document.querySelector('.addRestaurantForm')

openForm.addEventListener('click', ()=>{
    addRestaurantForm.style.display = 'flex'
   
})
closeForm.addEventListener('click', ()=>{
    addRestaurantForm.style.display = 'none'
   
})



// ADD NEW RESTAURANT
function addRestaurant() {
    //const url = '/restaurants/'+ restaurantId
  
    fetch("/restaurants/" , { method: "POST" })
      .then((res) => {
        res.json();
      })
      .catch(function (err) {
        console.error(err);
      });
  }
