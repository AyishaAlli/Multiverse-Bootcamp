const { response } = require("express");
const express = require("express"); //

const app = express(); // Creates Server
const port = 3000; // Sets port to 3000

//const { Sequelize, DataTypes, Model } = require("sequelize");
const { Restaurant } = require("./restaurant");

app.use(express.static("public")); // Gets code from folder called public

//Creates End Point for flipping a coin
// app.get("/flipcoin", (request, response) => {
//   const random = Math.floor(Math.random() * 2);
//   if (random === 1) {

//     response.send("Heads");
//   } else {
//     response.send("Tails");
//   }
// });

// creates endpoint for restaurants
app.get("/restaurants", async (req, res) => {
  /*const restaurant = await Restaurant.create({
    name: "Ronalds",
    image: "http://some.image.url",
  }); */
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

app.listen(port, () => {
  /*Listens out for that code and displays it on the webpage below */
  console.log(`Server listening at http://localhost:${port}`);
});
