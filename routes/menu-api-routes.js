// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/api/menuitems", (req, res) => {
    db.menuItem.findAll({}).then(items => {
      res.json(items);
    });
  });

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

  app.post("/api/menuitems", (req, res) => {
    db.menuItem.create(req.body).then(item => {
      res.json(item);
    });
  });

  app.delete("/api/menuitems/:id", (req, res) => {
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
};
