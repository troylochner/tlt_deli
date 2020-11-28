// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  //GET THE FULL MENU
  app.get("/api/menuitems", (req, res) => {
    db.menuItem.findAll({}).then(items => {
      res.json(items);
      //res.render("partials/menu/menu-block", { menu: items }); //pass as an object
    });
  });

  //GET A SINGLE MENU ITEM
  app.get("/api/menuitems/:id", (req, res) => {
    db.menuItem
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //ADD AN ITEM TO THE MENU
  app.post("/api/menuitems/add", (req, res) => {
    db.menuItem.create(req.body).then(item => {
      res.json(item);
    });
  });

  //UPDATE AN ITEM
  app.put("/api/menuitems/:id/update", (req, res) => {
    db.menuItem
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //DELETE AN ITEM FROM THE MENU
  app.delete("/api/menuitems/:id/delete", (req, res) => {
    db.menuItem
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });
  /*
  app.get("/placeorder", (req, res) => {
    db.menuItem.findAll({}).then(items => {
      res.render("partials/menu/menu-block", { menu: items }); //pass as an object
    });
  });*/

  /*
  app.post("/api/menuitems", (req, res) => {
    db.menuItem.create(req.body).then(item => {
      res.json(item);
    });
  });*/
};
