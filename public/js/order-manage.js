$(document).ready(() => {
  const placeOrder = $("button.order");
  const orderedItems = $("placeholder");

  placeOrder.on("submit", event => {
    event.preventDefault();
    const orderData = {
      items: orderedItems.val().trim()
    };
    submitOrder(orderData);
    orderItems.val("");
  });

  function submitOrder(order) {
    $.post("api/order", {
      items: order
    });
  }
});
