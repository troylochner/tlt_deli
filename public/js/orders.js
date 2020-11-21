// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".create-form").on("submit", event => {
    // Make sure to preventDefault on a submit event.
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

      window.location.replace("/placeorder");
=======
      //window.location.replace("/orders");

      // Reload the pa\ge to get the updated list
      //location.reload();
    });
  });

  /*
    $(".change-status").on("click", function(event) {
    const id = $(this).data("id");

    const devourState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: devourState
    }).then(() => {
      console.log("A burger has been devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });*/

  /*
  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
  */
});
