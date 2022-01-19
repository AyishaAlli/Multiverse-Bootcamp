const { response } = require("express");
const express = require("express");
const { check, validationResult } = require("express-validator");

const app = express(); // Creates Server
const port = 3000; // Sets port to 3000

//const { Sequelize, DataTypes, Model } = require("sequelize");
const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { MenuItem } = require("./MenuItem");
const { sequelize } = require("./sequelize_index");

//Middleware so that Express can read JSON and URL encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // Gets code from folder called public

// creating endpoint for searching all restaurants
app.get("/restaurants", async (req, res) => {
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
  const restaurant = await Restaurant.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.sendStatus(201).json(restaurant);
});

//New endpoint to listen to DELETE requests
app.delete("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.destroy({ where: { id: req.params.id } });
  res.sendStatus(201).json(data);
});

//INNER JOINS

// Get specific restaurant and its menus menu
app.get("/restaurants/:id/menus", async (req, res) => {
  const restaurants = await Restaurant.findAll({
    include: [
      {
        model: Menu,
        as: "menus",
        where: { restaurant_id: req.params.id },
      },
    ],
  });
  res.json(restaurants);
});

// // Update Menu on specific restaurant
app.put("/restaurants/:id/menus/:menuid", async (req, res) => {
  const menu = await Menu.update(req.body, {
    where: {
      id: req.params.menuid,
    },
  });
  res.json(menu);
});

//Menus and Menu Items for specific restaurant
app.get("/restaurants/:id/menus/menuitems", async (req, res) => {
  const restaurants = await Restaurant.findAll({
    include: [
      {
        model: Menu,
        as: "menus",
        where: {
          restaurant_id: req.params.id,
        },
        include: [
          {
            model: MenuItem,
            as: "menuItems",
            required: true,
          },
        ],
      },
    ],
  });
  res.json(restaurants);
});

app.listen(port, () => {
  /*Listens out for that code and displays it on the webpage below */
  console.log(`Server listening at http://localhost:${port}`);
});

// TODO : 'Update Menu in a specific restaurant';
