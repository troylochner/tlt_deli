// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // GET ALL ORDERS IN THE SYSTEM
  app.get("/api/orders", (req, res) => {
    db.order.findAll({}).then(items => {
      res.json(items);
    });
  });

  //BEGIN AN ORDER -- NOTE : DEFINE THE INPUT FIELDS - THIS CURRENT METHOD ALLOWS FOR TOO MUCH VARIATION
  app.post("/api/orders", (req, res) => {
    db.order.create(req.body).then(item => {
      res.json(item);
    });
  });

  //DO NOT USE THIS ENPOINT RIGHT NOW
  app.get("/api/orders/:id", (req, res) => {
    db.orderMenuItem
    .findAll({
        where: {
          orderId: req.params.id
        },
        /*include: [
          {
            model: db.order,
            as: "order",
            where:{id:req.params.id }
          }
        ]*/
      })
      .then(item => {
        res.json(item);
      });
  });


  //ADD ITEM TO AN ORDER

  app.post("/api/orders/:id/add", (req, res) => {
    var itemSubTotal = ( req.body.qty * req.body.price);
    db.orderMenuItem
      .create({
        orderId: req.params.id,
        menuItemId: req.body.menuItemId,
        qty: req.body.qty,
        itemSubtotal: itemSubTotal,
      })
      .then(results => {
        res.json(results);
      });
  });

  app.get("/api/orders/:id/total", (req, res) => {
    db.orderMenuItem
      .sum("itemSubtotal",{
        where: {
          orderId: req.params.id
        },
      })
      .then(orderTotal => {
        res.json(orderTotal);
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
