const { response } = require("express");
const express = require("express"); //

const app = express(); // Creates Server
const port = 3000; // Sets port to 3000

//const { Sequelize, DataTypes, Model } = require("sequelize");
const { Restaurant } = require("./Restaurant");

//Middleware so that Express can read JSON and URL encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// creating endpoint for searching all restaurants
app.get("/restaurants", async (req, res) => {
  /*const restaurant = await Restaurant.create({
    name: "Ronalds",
    image: "http://some.image.url",
  });*/
  const restaurants = await Restaurant.findAll();
  res.json(restaurants);
});

// new endpoint to search each restaurant by ID
app.get("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.json(restaurant);
});

//New endpoint to listen to CREATE a restaurant
app.post("/restaurants", async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.sendStatus(201).json(restaurant);
});

//New endpoint to listen to UPDATE requests
app.put("/restaurants/:id", async (req, res) => {
  const data = await Restaurant.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(201).json(data);
});

//New endpoint to listen to DELETE requests
app.delete("/restaurants/:id", async (req, res) => {
  const data = await Restaurant.destroy({ where: { id: req.params.id } });
  res.sendStatus(201).json(data);
});

app.listen(port, () => {
  /*Listens out for that code and displays it on the webpage below */
  console.log(`Server listening at http://localhost:${port}`);
});
