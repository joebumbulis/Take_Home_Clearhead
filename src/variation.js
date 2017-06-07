// Variation code goes here
// require("../main.css");

function variation() {
  $(function() {
    var docHeight = $(document).height();

    $("body").append("<div id='overlay'></div>");

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
    "<div class='modal'><h4 class='close-modal-btn'>X</h4><h6 class='welcome-title'>Welcome Back!</h6><p class='welcome-message'>You left something in your cart. Check out today!</p><img><div><h5 class='product-title'>name</h5><h6 class=''>Qty:</h6><h6>Color</h6></div><button class='cta-cart-button'>View Cart</button></div>"
  );
  var closeBtn = $modal.find(".close-modal-btn");
  var ctaBtn = $modal.find(".cta-cart-button");
  closeBtn.on("click", function() {
    $(".modal").addClass("hidden");
  });
  ctaBtn.on("click", function() {
    window.location.href = "https://www.vitamix.com/Shop/Shopping-Cart";
  });
  $container.append($modal);
}

//on page load: GET request to query cart.
//if empty do nothing
//if NOT empty, then after 3 sec timer; open Modal.
//

var openModal = function() {
  console.log("hello");
  //if local storage is empty then do nothing
  //if local storage has something, then launch and display
};

setTimeout(variation(), 3000);
