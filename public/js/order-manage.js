$(document).ready(() => {
  const placeOrder = $("button.order"); //SUBJECT TO CHANGE
  const orderedItems = $("placeholder"); //SUBJECT TO CHANGE
  const newOrderId = "";
  const orderPath = "api/orders/" + newOrderId;
  const email = "";
  const name = "";
  //Retrieve values from html (orderData) and runs function addOrder (RUNS ON username and email submit on orderForm.html)
  placeOrder.on("submit", event => {
    event.preventDefault();
    const orderData = {
      items: orderedItems.val().trim() //SUBJECT TO CHANGE (items in order may be located elsewhere)
    };
    // It's possible we can just take the data from the email/user inputs if we scrap the login/members system that we had initially
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
    // addOrder function may have to be connected to a different element
    addOrder(orderData, newOrderId);
    orderTotal(); //LOCATION OF FUNCTION CALL SUBJECT TO CHANGE
    orderItems.val("");
  });

  // Adds items to order and posts order
  function addOrder(order, orderId) {
    // Update orderPath (/api/orders/<current id>)
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
        //UNFINISHED BELOW
        $.post(orderPath, {
          items: price
        });
      });
  }
});
