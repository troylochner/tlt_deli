// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".item-edit").on("submit", event => {
    console.log("try");
    // Make sure to preventDefault on a submit event.

    event.preventDefault();

    const menuItem = {
      item: $("#itemName")
        .val()
        .trim(),
      category: $("#meal")
        .val()
        .trim(),
      description: $("#itemDesc")
        .val()
        .trim(),
      price: $("#itemPrice")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/menuitems/add", {
      type: "POST",
      data: menuItem
    }).then(() => {
      console.log("created new order");
      // Reload the page to get the updated list
      //location.reload();
    });
  });
});
