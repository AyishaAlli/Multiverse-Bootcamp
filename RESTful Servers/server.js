const express = require("express"); //

const app = express(); // Creates Server
const port = 3000; // Sets port to 3000

app.use(express.static("public")); // Gets code from folder called public

app.listen(port, () => {
  // Creates End Point for flipping a coin 
//   app.get("/flipcoin", (request, response) => {
//     random = Math.floor(Math.random() * 2);
//     if (random === 1) {
//       response.send("Heads");
//     } else {
//       response.send("Tails");
//     }
//   });
    // creates endpoint for restaurants
    app.get("/restaurants", (request, response) => {
          
          });
  /*Listens out for that code and displays it on the webpage below */
  console.log(`Server listening at http://localhost:${port}`);
});
