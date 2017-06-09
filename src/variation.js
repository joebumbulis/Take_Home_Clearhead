// Variation code goes here
$.ajax({
  type: "GET",
  dataType: "html",
  url: "https://www.vitamix.com/Shop/Shopping-Cart"
}).then(function(data, status) {
  var $cartPage = $(data);
  var $cartItems = $cartPage.find(".cart__item");
  var $randomItem = $cartItems[Math.floor(Math.random() * $cartItems.length)];
  var $randomItemImage = $($randomItem).find(".cart__item__image").html();
  var $randomItemTitle = $($randomItem).find(".cart__item__name").html();
  var $randomItemQty = $($randomItem).find(".cart__item__count").html();
  var $randomItemColor = $($randomItem).find(".swatch__radio-label").html();
  var $cartTotal = $cartItems.length;

  if ($cartItems.length > 0) {
    setTimeout(openModal, 3000);
  }

  var closeModal = function(e) {
    e.preventDefault;
    $(".hide-modal").css({
      display: "none"
    });
  };

  var testQty = function() {
    if (Number($randomItemQty) >= 2) {
      return $randomItemQty;
    } else {
      return 1;
    }
  };

  var cartTotal = function() {
    if ($cartTotal > 1) {
      return "Showing 1 of " + $cartTotal + "";
    } else {
      return "";
    }
  };

  function openModal() {
    var $container = $("#container");
    var $modal = $(
      "<div class='modal hide-modal'><h4 class='close-modal-btn'>X</h4><div class='welcome'><h6 class='welcome-title'>Welcome Back!</h6><p class='welcome-message'>You left something in your cart. Check out today!</p></div><div class='product-container'><span class='image'>" +
        $randomItemImage +
        "</span><div class='product-details'><h5 class='product-title'>" +
        $randomItemTitle +
        "</h5><h6 class='cart-qty'>Qty: " +
        testQty() +
        "</h6><h6 class='product-color'>" +
        $randomItemColor +
        "</h6></div></div><h6 class='multiple-items-message'>" +
        cartTotal() +
        "</h6><button class='cta-cart-button'>View Cart</button></div>"
    );
    $(function() {
      var docHeight = $(document).height();
      $("#overlay").on("click", closeModal);
      $("#overlay").height(docHeight).css({
        opacity: 0.4,
        position: "absolute",
        top: 0,
        left: 0,
        "background-color": "black",
        width: "100%",
        "z-index": 500
      });
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
      $(".product-container").css({
        width: "100%",
        display: "inline-flex"
      });
      $(".image").css({
        height: "130px",
        float: "left",
        "margin-top": "1rem",
        "margin-left": "4rem",
        cursor: "pointer"
      });
      $(".product-details").css({
        float: "right",
        margin: "2rem 3rem 0 1rem"
      });
      $(".product-title").css({
        "font-family": "Gotham Narrow SSm A, Gotham Narrow SSm B, Helvetica, sans-serif",
        "font-size": "1.5rem",
        color: "#4B6985",
        margin: "1rem .1rem .7rem 0",
        cursor: "pointer"
      }), $(".product-title").hover(
        function() {
          $(this).css("color", "#509de5");
          $(this).css("text-decoration", "underline");
        },
        function() {
          $(this).css("color", "#4B6985");
          $(this).css("text-decoration", "none");
        }
      );
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
      $(".cta-cart-button").hover(
        function() {
          $(this).css("background-color", "#509de5");
        },
        function() {
          $(this).css("background-color", "#4B6985");
        }
      );
    });
    var closeBtn = $modal.find(".close-modal-btn");
    var ctaBtn = $modal.find(".cta-cart-button");

    closeBtn.on("click", closeModal);
    ctaBtn.on("click", function() {
      window.location.href = "https://www.vitamix.com/Shop/Shopping-Cart";
    });
    $("body").append("<div id='overlay' class='hide-modal'></div>");
    $container.append($modal);
  }
});
