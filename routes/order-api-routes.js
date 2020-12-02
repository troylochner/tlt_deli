// Requiring our models and passport as we've configured it
const db = require("../models");
//const orderMenuItem = require("../models/orderMenuItem");

module.exports = function(app) {
  // GET ALL ORDERS IN THE SYSTEM
  app.get("/api/orders", (req, res) => {
    db.order.findAll({ include: [{ all: true, nested: true }] }).then(items => {
      //res.json(items);
      const x = processAll(items);
      res.json(x);
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
  // eslint-disable-next-line no-unused-vars
  app.post("/api/orders", (req, res) => {
    db.order.create(req.body).then(item => {
      res.json(item);
      //res.redirect("/orders");
    });
  });

  //GET ORDER DETAILS API
  app.get("/api/orders/:id", (req, res) => {
    db.order
      .findOne({
        where: {
          id: req.params.id
        },
        //include: [{ all: true, nested: false }]
        include: [
          //{ model: db.orderMenuItem, nested: true },

          {
            model: db.menuItem,
            nested: true,
            attributes: ["price", "item", "description"]
          }
        ]
      })
      .then(orderInfo => {
        const x = processOrder(orderInfo);
        res.json(x);
        //HOW TO GET THINGS FROM THE DATA :
        // menuItems[0].orderMenuItem.qty -- HOW MANY OF AN ITEM
        // menuItems[0].price -- GET THE PRICE
      });
  });

  //GET ORDER DETAILS API
  app.get("/orders/:id", (req, res) => {
    db.order
      .findOne({
        where: {
          id: req.params.id
        },
        include: [{ all: true, nested: true }]
      })
      .then(results => {
        //res.json(results);
        res.render("place-order", {
          orderDetail: results
        });
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

  //ADD MULTIPLE ITEMS TO AN ORDER
  app.post("/api/orders/addbulk", (req, res) => {
    //const itemSubTotal = req.body.qty * req.body.price;
    const itemArray = req.body.items;
    console.log(itemArray);
    db.orderMenuItem.bulkCreate(itemArray).then(results => {
      res.json(results);
      console.log(results);
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

  function processAll(items) {
    const allOrders = [];
    console.log(items.length);
    for (x = 0; x < items.length; x++) {
      const orderDetail = processOrder(items[x]);
      allOrders.push(orderDetail);
    }

    return allOrders;
  }

  function processOrder(orderInfo) {
    //const orderArray = [];
    const itemArray = [];
    let OrderTotal = 0;
    const itemCount = orderInfo.menuItems.length;
    for (i = 0; i < itemCount; i++) {
      const itemObj = {
        item: orderInfo.menuItems[i].item,
        qty: orderInfo.menuItems[i].orderMenuItem.qty,
        price: orderInfo.menuItems[i].price,
        itemTotal:
          orderInfo.menuItems[i].orderMenuItem.qty *
          orderInfo.menuItems[i].price
      };
      itemArray.push(itemObj);
    }

    for (n = 0; n < itemArray.length; n++) {
      OrderTotal += itemArray[n].itemTotal;
    }

    //const items = { orderItems: itemArray };
    const orderObj = {
      orderInfo: {
        id: orderInfo.id,
        custName: orderInfo.custName,
        email: orderInfo.email,
        orderStatus: orderInfo.orderStatus,
        orderTime: orderInfo.createdAt,
        totalPrice: OrderTotal,
        items: itemArray
      }
    };
    //orderArray.push(items);
    //orderArray.push(orderObj);
    return orderObj;
  }
};
