// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  //UPDATE ROOT --- SEND TO DELI HOME BEFORE ANYTHING ELSE
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //EMPLOYEES MUST LOGIN TO SEE ORDER
  app.get("/employees", (req, res) => {
    // IF THE USER IS AN AUTHENTICATED USER -- SEND THEM TO THE ORDERS OVERVIEW PAGE. THIS MEANS THEY WORK HERE>>>
    if (req.user) {
      res.redirect("/orders");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
    //IF THE USER DOES NOT WORK HERE --> SEND THEM TO THE PLACE ORDER PAGE...
    //res.redirect("/placeorder");
  });

  app.get("/signup", (req, res) => {
    //IF THE USER IS ALREADY LOGGED IN --> JUST GO TO ORDERS
    if (req.user) {
      res.redirect("/orders");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    //IF THE USER IS ALREADY LOGGED IN --> JUST GO TO ORDERS
    if (req.user) {
      res.redirect("/orders");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  /*

  //ADDED PATH TO GET MENU ITEMS + ORDERS + TABLES
  app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/neworder", (req, res) => {
    //res.sendFile(path.join(__dirname, "../public/orderForm.html"));
    res.render("orderForm");
  });*/

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
