// Variation code goes here
$.ajax({
  type: "GET",
  dataType: "html",
  url: "https://www.vitamix.com/Shop/Shopping-Cart"
}).then(function(data, status) {
  setTimeout(openModal, 3000);
  //check data in cart
  //if the cart is empty then do nothing
  //otherwise launch timer for openModal
  // console.log(data);
  $(data).find("#item0");
  console.log($(data).find("#item0"));
});

//use jQuery to grab info from data to populate the modal with:
//picture of item
//title
//Qty
//color
//number of items in cart
//link to item's page
var closeModal = function() {
  $(function() {
    $(".hidden").css({
      display: "none"
    });
  });
};

function openModal() {
  $(function() {
    var docHeight = $(document).height();
    $("#overlay").on("click", function() {
      return closeModal();
      $(".modal").addClass("hidden");
      $("#overlay").addClass("hidden");
    });
    $("#overlay").height(docHeight).css({
      opacity: 0.4,
      position: "absolute",
      top: 0,
      left: 0,
      "background-color": "black",
      width: "100%",
      "z-index": 500
    });
  });

  var $container = $("#container");
  var $modal = $(
    "<div class='modal hidden'><h4 class='close-modal-btn'>X</h4><div class='welcome'><h6 class='welcome-title'>Welcome Back!</h6><p class='welcome-message'>You left something in your cart. Check out today!</p></div><img class='image' src='https://www.vitamix.com//media/other/images/xascent-series-152x290.jpg.pagespeed.ic.LSCvQwTLVj.jpg'><div class='product-details'><h5 class='product-title'>7500</h5><h6 class='cart-qty'>Qty: 1</h6><h6 class='product-color'>Black</h6></div><h6 class='multiple-items-message'>Showing 1 of 3</h6><button class='cta-cart-button'>View Cart</button></div>"
  );
  $(function() {
    $(".modal").css({
      "z-index": "1000",
      "background-color": "#fff",
      position: "absolute",
      left: "30%",
      top: "20%",
      width: "450px",
      height: "450px"
    });
    $(".close-modal-btn").css({
      margin: ".5rem",
      float: "right",
      color: "#E1E1E1",
      "font-size": "1.4rem",
      "font-weight": "100"
    });
    $(".close-modal-btn:hover").css({
      cursor: "pointer"
    });
    $(".welcome").css({
      "text-align": "center"
    });
    $(".welcome-title").css({
      color: "#4B6985",
      "font-weight": "200",
      "font-size": "3.1rem",
      "font-family": "Sentinel A, Sentinel B, Georgia, serif",
      margin: "3rem auto 1rem"
    });
    $(".welcome-message").css({
      "font-family": "Gotham Narrow SSm A, Gotham Narrow SSm B, Helvetica, sans-serif",
      width: "70%",
      margin: "0 auto",
      "font-size": "1.3rem",
      "font-weight": "300",
      color: "#666666",
      "line-height": "1.5rem"
    });
    $(".image").css({
      height: "130px",
      "margin-top": "2rem",
      "margin-left": "9rem",
      cursor: "pointer"
    });
    $(".product-details").css({
      float: "right",
      "margin-right": "9rem"
    });
    $(".product-title").css({
      "font-family": "Gotham Narrow SSm A, Gotham Narrow SSm B, Helvetica, sans-serif",
      "font-size": "1.5rem",
      color: "#4B6985",
      margin: "3rem 0 .7rem 0",
      cursor: "pointer"
    }), $(".product-title:hover").css({
      "text-decoration": "underline",
      color: "#509de5"
    });
    $(".cart-qty").css({
      "font-family": "Gotham Narrow SSm A, Gotham Narrow SSm B, Helvetica, sans-serif",
      margin: "0",
      color: "#666666",
      "line-height": "1.5rem",
      "font-size": "1rem",
      "font-weight": "300"
    });
    $(".product-color").css({
      "font-family": "Gotham Narrow SSm A, Gotham Narrow SSm B, Helvetica, sans-serif",
      margin: "0",
      color: "#666666",
      "line-height": "1.5rem",
      "font-size": "1rem",
      "font-weight": "300"
    });
    $(".multiple-items-message").css({
      "text-align": "center",
      "font-family": "Gotham Narrow SSm A, Gotham Narrow SSm B, Helvetica, sans-serif",
      margin: ".5rem",
      color: "#E1E1E1",
      "line-height": "1.5rem",
      "font-size": "1rem",
      "font-weight": "300"
    });
    $(".cta-cart-button").css({
      "text-align": "center",
      margin: "auto",
      display: "block",
      "margin-top": "1rem",
      "font-family": "Sentinel A, Sentinel B, Georgia, serif",
      "font-size": "1.2rem",
      border: "none",
      "background-color": "#4B6985",
      color: "#fff",
      width: "13rem",
      height: "3rem",
      cursor: "pointer"
    });
    $(".cta-cart-button:hover").css({
      "background-color": "#509de5"
    });
  });

  var closeBtn = $modal.find(".close-modal-btn");
  var ctaBtn = $modal.find(".cta-cart-button");

  closeBtn.on("click", function() {
    return closeModal();
    $(".modal").addClass("hidden");
    $("#overlay").addClass("hidden");
  });
  ctaBtn.on("click", function() {
    window.location.href = "https://www.vitamix.com/Shop/Shopping-Cart";
  });
  $("body").append("<div id='overlay' class='hidden'></div>");
  $container.append($modal);
}

setTimeout(openModal, 3000);
