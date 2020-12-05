$(document).ready(() => {
  //Generate totals for all orders
  $.ajax("/api/orders", {
    type: "GET",
    success: function(res){
      for (let i = 1; i <= res.length; i++){
        $.ajax("api/orders/" + i + "/total/", {
          type: "GET",
          success: function(response){
            console.log(JSON.stringify(response));
            const thisOrder = "#total" + (i-1);
            $(thisOrder).html(response);
            console.log(response);
          }
        });
      }
    }
  });
  console.log($("[data-id=1]"));
  $("tr").on("click", event => {
    event.preventDefault();
    console.log(event);
    const targetOrder = event.currentTarget.attributes[0].nodeValue;
    console.log(targetOrder);
    const targetButton =
      event.originalEvent.originalTarget.childNodes[0].nodeValue;
    console.log(targetButton);
    if (targetButton === "Details") {
      $.ajax("/api/orders/" + targetOrder + "/items/", {
        type: "GET",
        success: function(res) {
          console.log(res);
          const itemArray = [];
          for (let i = 0; i < res.length; i++) {
            itemArray.push((res[i].itemName).trim() + " (Quantity: " + (res[i].qty) + ")" + "\n");
          }
          console.log(itemArray);
          alert(itemArray.join(""));
        }
      });
    } else if (targetButton === "Complete") {
      const status = {
        orderStatus: "Old"
      };
      $.ajax("/api/orders/" + targetOrder, {
        type: "PUT",
        data: status
      }).then(() => {
        location.reload();
      })
    } else if (targetButton === "Delete") {
      const deleteRoute = "/api/orders/" + targetOrder;
      $.ajax(deleteRoute, { type: "DELETE" }).then(() => {
        location.reload();
      })
    }
  });
});
