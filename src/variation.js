// Variation code goes here
// require("../main.css");
$.ajax({
  type: "GET",
  dataType: "html",
  url: "https://www.vitamix.com/Shop/Shopping-Cart"
}).then(function(data, status) {
  setTimeout(openModal, 3000);

  //check data in cart
  //if the cart is empty then do nothing
  //otherwise launch timer for openModal
  console.log(data);
});

//use jQuery to grab info from data to populate the modal with:
//picture of item
//title
//Qty
//color
//number of items in cart
//link to item's page
var closeModal = function() {
  console.log("close this thing");
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
      left: "20%",
      top: "20%",
      width: "450px",
      height: "450px"
      // 'border': '.1rem', 'solid' "#E1E1E1"
    });
    // $(".hidden").css({
    //   display: "none"
    // });
    $(".close-modal-btn").css({
      margin: ".5rem",
      float: "right",
      color: "#E1E1E1",
      "font-size": "1.4rem",
      "font-weight": "100"
    });
  });

  var closeBtn = $modal.find(".close-modal-btn");
  var ctaBtn = $modal.find(".cta-cart-button");
  $("#overlay").on("click", function() {
    $(".modal").addClass("hidden");
    $("#overlay").remove();
  });
  closeBtn.on("click", function() {
    $(".modal").addClass("hidden");
    $("#overlay").addClass("hidden");
  });
  ctaBtn.on("click", function() {
    window.location.href = "https://www.vitamix.com/Shop/Shopping-Cart";
  });
  $("body").append("<div id='overlay'></div>");
  $container.append($modal);
}

setTimeout(openModal, 3000);
