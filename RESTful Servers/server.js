const express = require("express"); //

const app = express(); // Creates Server
const port = 3000; // Sets port to 3000

app.use(express.static("public")); // Gets code from folder called public

app.listen(port, () => {
  /*Listens out for that code and displays it on the webpage below */
  console.log(`Server listening at http://localhost:${port}`);
});
