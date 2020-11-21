$(document).ready(() => {
  const newOrderId = "";
  // Create a new order
  $(() => {
    $(".create-form").on("submit", event => {
      event.preventDefault();

      const order = {
        custName: $("#custName")
          .val()
          .trim(),
        email: $("#custEmail")
          .val()
          .trim()
      };

      // Send the POST request.
      $.ajax("/api/orders", {
        type: "POST",
        data: order
      }).then(() => {
        console.log(order);
        newOrderId = this.id;
      });
    });
  }).then(() => {
    const orderItems = {
      menuItemId: $("#placeholderId")
        .val()
        .trim(),
      qty: $("#placeholderQty")
        .val()
        .trim(),
      itemName: $("#placeholderName")
        .val()
        .trim(),
      price: $("#placeholderPrice")
        .val()
        .trim()
    };

    $.ajax("/api/orders/" + newOrderId + "/add/", {
      type: "POST",
      data: orderItems
    }).then(() => {
      console.log(orderItems);
      window.location.replace("orders.handlebars");
    });
  });
});
