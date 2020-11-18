// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // GET ALL ORDERS IN THE SYSTEM
  app.get("/api/orders", (req, res) => {
    db.order.findAll({}).then(items => {
      res.json(items);
    });
  });

  app.get("/orders", (req, res) => {
    db.order.findAll({}).then(data => {
      //console.log(data);
      res.render("orders", {
        orders: data,
        status: "Open"
      });
    });
  });

  // GET ALL ORDERS BY STATUS
  app.get("/api/orders/status/:status", (req, res) => {
    db.order
      .findAll({
        where: {
          orderStatus: req.params.status
        }
      })
      .then(items => {
        res.json(items);
      });
  });

  //BEGIN AN ORDER -- NOTE : DEFINE THE INPUT FIELDS - THIS CURRENT METHOD ALLOWS FOR TOO MUCH VARIATION
  app.post("/api/orders", (req, res) => {
    db.order.create(req.body).then(item => {
      res.json(item);
      //res.redirect("/orders");
    });
  });

  //GET ORDER HEADLINE INFO
  app.get("/api/orders/:id", (req, res) => {
    db.order
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(results => {
        res.json(results);
      });
  });

  //UPDATE ORDER
  app.put("/api/orders/:id", (req, res) => {
    db.order
      .update(
        {
          custName: req.body.custName,
          email: req.body.email,
          orderStatus: req.body.orderStatus
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(results => {
        //let orderDetail  = db.order.findByPk(req.params.id)
        res.json(results);
        //console.log(results[1].dataValues)
      });
  });

  //LISTS INDIVIDUAL ITEMS IN AN ORDER
  app.get("/api/orders/:id/items", (req, res) => {
    db.orderMenuItem
      .findAll({
        where: {
          orderId: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //ADD SINGLE ITEMS TO AN ORDER
  app.post("/api/orders/:id/add", (req, res) => {
    const itemSubTotal = req.body.qty * req.body.price;
    db.orderMenuItem
      .create({
        orderId: req.params.id,
        menuItemId: req.body.menuItemId,
        qty: req.body.qty,
        itemSubtotal: itemSubTotal,
        itemName: req.body.itemName
      })
      .then(results => {
        res.json(results);
      });
  });

  //GET THE TOTAL OF THE ORDER
  app.get("/api/orders/:id/total", (req, res) => {
    db.orderMenuItem
      .sum("itemSubtotal", {
        where: {
          orderId: req.params.id
        }
      })
      .then(orderTotal => {
        res.json(orderTotal);
      });
  });

  //DELETE SINGLE ITEM FROM ORDER
  app.delete("/api/orders/:id/:idItem/remove", (req, res) => {
    db.orderMenuItem
      .destroy({
        where: {
          orderId: req.params.id,
          id: req.params.idItem
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //DELETE AN ORDER
  app.delete("/api/orders/:id", (req, res) => {
    db.order
      .destroy({
        where: {
          id: req.params.id
        }
      })
      // eslint-disable-next-line no-unused-vars
      .then(item => {
        res.redirect("/orders");
        //res.json(item);
      });
  });
};
