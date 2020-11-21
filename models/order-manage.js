$(document).ready(() => {
  const placeOrder = $("button.order");
  const orderedItems = $("placeholder");
  const newOrderId = "";
  const orderPath = "api/orders/" + newOrderId;
  const email = "";
  const name = "";
  //Retrieve values from html (orderData) and runs function addOrder
  placeOrder.on("submit", event => {
    event.preventDefault();
    const orderData = {
      items: orderedItems.val().trim()
    };
    $.get("/api/user_data").then(data => {
      email = data.email;
      name = data.name;
    });
    $.post("/api/order", {
      custName: email,
      custEmail: name
    }).then(() => {
      newOrderId = this.id;
    });
    addOrder(orderData, newOrderId);
    orderTotal();
    orderItems.val("");
  });

  // Adds items to order and posts order
  function addOrder(order, orderId) {
    //Update orderPath (/api/orders/<current id>)
    orderPath = "api/orders/" + orderId;
    $.post(orderPath + "/add", {
      menuItem: id
    });
  }
  // Gets all items from current order and totals price
  function orderTotal() {
    const price = 0;
    $.get(orderPath)
      .then(data => {
        for (i = 0; i < data.length; i++) {
          price = price + data.newOrderId.price[i];
        }
      })
      .then(() => {
        //Do we need a new price (total) column?
        $.post(orderPath, {
          items: price
        });
      });
  }
});
