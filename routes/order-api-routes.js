// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/api/orders", (req, res) => {
    db.Order.findAll({}).then(items => {
      res.json(items);
    });
  });

  app.get("/api/orders/:id", (req, res) => {
    db.Order.findOne({
      where: {
        id: req.params.id
      }
    }).then(item => {
      res.json(item);
    });
  });

  app.post("/api/orders", (req, res) => {
    db.Order.create(req.body).then(item => {
      res.json(item);
    });
  });

  app.put("/api/orders/:id", (req, res) => {
    db.Order.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(item => {
      res.json(item);
    });
  });

  app.delete("/api/orders/:id", (req, res) => {
    db.Order.destroy({
      where: {
        id: req.params.id
      }
    }).then(item => {
      res.json(item);
    });
  });
};
