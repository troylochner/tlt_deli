// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/api/tabletop", (req, res) => {
    db.tableTop.findAll({}).then(items => {
      res.json(items);
    });
  });

  app.get("/api/tabletop/:tableNumber", (req, res) => {
    db.tableTop
      .findOne({
        where: {
          tableNumber: req.params.tableNumber
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  app.post("/api/tabletop", (req, res) => {
    db.tableTop.create(req.body).then(item => {
      res.json(item);
    });
  });

  app.put("/api/tabletop/:tableNumber", (req, res) => {
    db.tableTop
      .update(req.body, {
        where: {
          tableNumber: req.params.tableNumber
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  /*
  app.delete("/api/tabletop/:tableNumber", (req, res) => {
    db.tableTop
      .destroy({
        where: {
          tableNumber: req.params.tableNumber
        }
      })
      .then(item => {
        res.json(item);
      });
  });
  */
};
