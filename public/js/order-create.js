$(document).ready(() => {
  let newOrderId;
  $(":button").on("click", event => {
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
    })
      .then(() => {
        $.ajax("/api/orders", {
          type: "GET",
          success: function(res) {
            const resLength = JSON.stringify(res.length);
            newOrderId = parseInt(resLength);
            console.log(newOrderId);
          }
        });
      })
      .then(() => {
        console.log("checkpoint");
        const entireOrder = {
          items: []
        };
        $.ajax("/api/menuitems", {
          type: "GET",
          success: function(menuItems) {
            console.log(menuItems);
            for (i = 0; i < parseInt(menuItems.length); i++) {
              console.log(parseInt(menuItems.length));
              if ($("#FormControl" + i).val() > 0) {
                const orderItem = {
                  orderId: newOrderId,
                  menuItemId: i,
                  qty: $("#FormControl" + i).val(),
                  itemName: $("#item" + i).html(),
                  price: $("#price" + i)
                    .html()
                    .trim()
                };
                entireOrder.items.push(orderItem);
              }
            }
            console.log(entireOrder);
          }
        }).then(() => {
          $.ajax("/api/orders/addbulk", {
            type: "POST",
            data: entireOrder
          }).then(() => {
            console.log(entireOrder);
            window.location.replace("/orders");
          });
        });
      });
  });
});
