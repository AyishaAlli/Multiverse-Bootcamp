// Importing all my class files
const { Restaurant } = require("./Restaurant"); // restaurant class
const { Menu } = require("./Menu"); // Menu class
const { MenuItem } = require("./MenuItem"); // Menu item class

//Packages
const { sequelize } = require("./sequelize_index"); // Imports new index of sequelize from the file names 'sequelize_index'
const { response } = require("express"); // VSC Imported this
const express = require("express"); // Express server
const { engine } = require("express-handlebars"); //Stackoverflow : If you want to use express-handlebars with commonJS module you should import it like this with const {engine}
const Handlebars = require("handlebars"); // Imports handlebars - Needed to allow prototype access
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access"); // prototype access so i can see my templates. Shouldnt be used in real project
const methodOverride = require('method-override')

const app = express(); // Creates Server
const port = 3000; // Sets port to 3000

//Middleware
app.use(express.urlencoded({ extended: true }));  //Express can read URL encoded request bodies. Needed for POST and PUT requests
app.use(express.json()); // recognises incomijng requests as a JSON objest
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//Middleware for handlebars configuration
app.engine(
  "handlebars",
  engine({ handlebars: allowInsecurePrototypeAccess(Handlebars) })
); // protype access. shouldnt be used in actual project due to security issues
app.set("view engine", "handlebars");

app.use(express.static("public")); // Gets code from folder called public. Things like js and cc files will go in here




//ENDPOINTS WITH HANDLEBARS RENDERING DATA AND FEEDING TO VIEWS FOLDER

//Show all Restaurants ( Name and images) - Homepage
app.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.render("restaurants", {
    restaurants,
    style: "restaurants.css",
    title: "RestoDirect ",
  });
});

// Show each restaurant with its menus and menu items 
app.get("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id, {
        include: [
          {
            model: Menu,
            as: "menus",
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
  res.render("restaurant", {
        restaurant,
        style: "restaurant.css",
        title: "Restaurant",
      });
});

//New endpoint to listen to CREATE a restaurant
app.post("/restaurants", async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).redirect('/restaurants')
});

//New endpoint to listen to UPDATE for restaurant Name and Image requests
app.put("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(201).redirect(`/restaurants/${req.params.id}`);
});

// // Update Menu on specific restaurant
app.put("/restaurants/:id/menus/:menuid", async (req, res) => {
  const menu = await Menu.update(req.body, {
    where: {
      id: req.params.menuid,
    },
  });
  res.status(201).redirect(`/restaurants/${req.params.id}`)
});



//New endpoint to listen to DELETE requests
app.delete("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.destroy({ where: { id: req.params.id } });
  res.status(201).redirect(`/restaurants/${req.params.id}`)
});

//EXAMPLE : searching all restaurants -  As JSON file (Before handlebars)
// app.get("/restaurants", async (req, res) => {
//   const restaurants = await Restaurant.findAll();
//   res.send(restaurants); // returns RAW JSON
// });

//search each restaurant by ID
// app.get("/restaurants/:id", async (req, res) => {
//   const restaurant = await Restaurant.findByPk(req.params.id);
//   res.send(restaurant);
// });



//INNER JOINS

// Get specific restaurant and its menus menu
// app.get("/restaurants/:id/menus", async (req, res) => {
//   const restaurants = await Restaurant.findAll({
//     include: [
//       {
//         model: Menu,
//         as: "menus",
//         where: { restaurant_id: req.params.id },
//       },
//     ],
//   });
//   res.send(restaurants);
// });


//Menus and Menu Items for specific restaurant
// app.get("/restaurants/:id/menus/menuitems", async (req, res) => {
//   const restaurants = await Restaurant.findAll({
//     include: [
//       {
//         model: Menu,
//         as: "menus",
//         where: {
//           restaurant_id: req.params.id,
//         },
//         include: [
//           {
//             model: MenuItem,
//             as: "menuItems",
//             required: true,
//           },
//         ],
//       },
//     ],
//   });
//   res.send(restaurants);
// });

app.listen(port, () => {
  /*Listens out for that code and displays it on the webpage below */
  console.log(`Server listening at http://localhost:${port}`);
});

// Doesnt effect my restaurants.json file, how comes?

