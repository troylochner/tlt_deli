/* eslint-disable no-unused-vars */
//const express = require("express");
$(document).ready(() => {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  const url = window.location.search;
  let menuItemId;
  // Sets a flag for whether or not we're updating a post to be false initially
  let updating = false;
  let menuitems;

  getMenu();

  // Getting jQuery references to the post body, title, form, and category select
  const itemInput = $("#itemName");
  const descriptionInput = $("#itemDesc");
  const itemPriceInput = $("#itemPrice");
  const categoryInput = $("#meal");
  // Giving the postCategorySelect a default value
  postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $("item-edit").on("submit", event => {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!item.val().trim() || !description.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    const menuItem = {
      item: itemInput.val().trim(),
      description: descriptionInput.val().trim(),
      category: categoryInput.val(),
      price: itemPriceInput.val().trim()
    };

    console.log(menuItem);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function addMenuItem(Post) {
    $.post("/api/posts/", Post, () => {
      window.location.href = "/blog";
    });
  }

  //GET THE MENU FROM OUR API
  function getMenu() {
    $.get("/api/menuitems/", res => {
      console.log(res);
      menuItems = res;
      res.render("partials/menu/menu-block", { menu: menuItems }); //pass as an object
      //res.render("index", res);
      //location.reload();
    });
  }

  // Gets post data for a post if we're editing
  function getItemData(id) {
    $.get("/api/menuitem/" + id, data => {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        postCategorySelect.val(data.category);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    }).then(() => {
      window.location.href = "/blog";
    });
  }
});
