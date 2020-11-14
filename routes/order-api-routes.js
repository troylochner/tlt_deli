// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/api/orders", (req, res) => {
    db.order.findAll({}).then(items => {
      res.json(items);
    });
  });

  app.get("/api/orders/:id", (req, res) => {
    db.order
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  app.post("/api/orders", (req, res) => {
    db.order.create(req.body).then(item => {
      res.json(item);
    });
  });

  //ADD ITEM TO AN ORDER
  app.post("/api/orders/:id/add", (req, res) => {
    db.orderMenuItem
      .create({
        orderId: req.params.id,
        menuItemId: req.body.menuItemId
      })
      .then(results => {
        res.json(results);
      });
  });

  app.put("/api/orders/:id", (req, res) => {
    db.order
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  app.delete("/api/orders/:id", (req, res) => {
    db.order
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
