* Began with understanding the task, how to access the DOM and add code to it. Needed quick review of jQuery.
* Completely new tasks:
  * injecting code into DOM in console.
  * GET request html from another page to both traverse it and use it to populate another page.
  * Writing CSS into jQuery/JavaScriptfile
  * creating an event handler for the overlay so on click on screen outside modals closes modal


## Tasks List:
- [x] search Vitamix site for libraries to use: jQuery
- [x] build out file structure - index.html, sass, react
- [x] insert HTML into DOM using jQuery
- [x] create modal on timer  
  - [x] modal will pop up 3 seconds after landing on page
  - [x] get copy
  - [x] display one RANDOM item from shopping cart
    - [x] use GET request to access html on cart page
    - [x] The item’s name and picture will link back to the item’s PDP (product detail page).
    - [x] The item’s name has a hover state, turning to the actionable blue and underlined.
    - [x] If there are 2+ items, there will be a small line of text beneath the item saying “Showing 1 of X”. REVIEW - example
- [x] There is a CTA button in the modal that reads “View Cart”. It will have a light blue hover state, consistent with all other blue buttons on Vitamix’s site.
- [x] A user can close the modal by clicking anywhere outside of the modal or the ‘X’ in the modal’s top right corner.
- [ ] Refactor the css into cleaner function
- [ ] make the variation.js more modular- import actions & styling


## Planning:
- [x] When page loads / 3 sec timer starts IF there is something in cart
- [x] If cart is empty / nothing happens
- [x] If cart has at least one items / then modal launches
- [x] If cart has one or more items / then load with special message
- [x] when x is clicked / modal closes - no actions
- [x] when CTA button is clicked / then cart page opens & modal closes
- [x] when cart item pic or text clicked, / then opens to item page

## Set up file system:
  * Unclear about file structure approach- created index.html and main.css; but emailed Case about clarity around using React.js
    * No react, build in the actual DOM/ create experimental page.
  * emailed Case about clarity about how much build out does the landing page need in the comp v1.
  * created a local html file to use for the initial modal build
  * created separate CSS file, but will need to import it or write in the styling into the js

## Notes/Issues:
* Began with creating a styling the modal. Copied colors from Vitamix.com.

* Created Overlay- problem with creating a click handler to click on the overlay (ie, click anywhere but the modal except the modal's "x" close button) in order to close the modal.
  * Solved it with this code and added the addClass for the overlay to the "x" handler
  ```$("#overlay").on("click", function() {
        $(".modal").addClass("hidden");
        $("#overlay").addClass("hidden");
    });
    ```

* Primary issue: GETting the cart information from the home page of Vitamix. Tried running a GET request to both https://www.vitamix.com/ & https://www.vitamix.com/Shop/Shopping-Cart in order to see if JSON came back as a usable object. This didn't work.
  * First tried a couple localstorage and cookies methods to no avail, but the get hint became even more obvious in Case's email when he said I could GET the info.
  * Then tried different versions of GET requests from the home page: https://www.vitamix.com/
    Was able to retrieve helpful data using:
    ```$.ajax({
      type: "GET",
      dataType: "html",
      url: "https://www.vitamix.com/Shop/Shopping-Cart"
    }).then(function(data, status) {
      console.log(data);
    });
    ```
* Reviewing Data from Cart:
  * Notes for thinking through where to .find()
  * EMPTY: the `<div class='l-full-width'><div>Your Cart is Empty</div></div>`
  * Else:
    * id=0-item-price
    * li ... id="item0", "item1", etc, class="cart-item"
  * Was able to get everything I needed from the cart with this code (obtained from Case's hint)
  `var $cartPage = $(data);
  var $cartItems = $cartPage.find(".cart__item");`
  * Getting random item code:
    `  var $randomItem = $cartItems[Math.floor(Math.random() * $cartItems.length)];`
  * Able to obtain the image, title, and color straightforward with code like:
  `var $randomItemImage = $($randomItem).find(".cart__item__image").html();`
      * Placed `$randomItemImage` inside the modal string
  * Hit a challenge when needed to create the quantity. When the quantity of an item was 2 or more, than the number appeared and was simple to place in the string.
    * BUT, when the quantity was 1 (which would likely be most users' stories), then a long string of html elements was returned.
    * instead of a var like above, used a function to return the correct quantity:
    ```var testQty = function() {
      if (Number($randomItemQty) >= 2) {
        return $randomItemQty;
      } else {
        return 1;
      }
    };
    ```
    * Did something similar with special message that pops up if the cart has 2 or more items:
    first created the var with this line: `  var $cartTotal = $cartItems.length;`
    then made this function which is called in the string in the modal.
    ```var cartTotal = function() {
      if ($cartTotal > 1) {
        return "Showing 1 of " + $cartTotal + "";
      } else {
        return "";
      }
    };
    ```


* Importing CSS into JS file: issue
  * First, had to figure out that the css needed to be called in an anonymous callback function. This was the first time I had needed to use jQuery .css() in order to get css instead od having a styles file. 
  * Ran into major problem trying to get the jquery addClass to work with the import. Once imported, the class "hidden" with properties, display: none did not work.
  * FIX: instead of using addClass to add "hidden", using the event handlers on the "x" button as well as the overlay to call a function closeModal that makes active the hidden class with a property of none.
  * Imported all the CSS from the main.css file into the variation.js using jquery.css()
  * Lost hover state: working to correct this issue using functions that call hover().css()
  * Was able to fix the hover state using .hover() method in jQuery (for the product title and cta button in the modal):
  ```$(".product-title").hover(
    function() {
      $(this).css("color", "#509de5");
      $(this).css("text-decoration", "underline");
    },
    function() {
      $(this).css("color", "#4B6985");
    }
  );
  ```

- [x ] Discovered after importing all of css into variation.js, that the code no longer works in the console of Vitamix.com
  * Clicked through elements in the console, found that the modal I created was present.
  * deleted the `".hidden"` class from the modal and it appeared.
  * Tried deleted and cleaning up functions in my code, but this did not work for making the modal appear.
  * Realized that Vitamix may also be using a class name: `".hidden"` and it would override my own.
  * FIX: Changed my code `".hidden"` to "hide-modal" for use on both the modal and overlay.



* Git Issues:
    * I downloaded instead of cloned the homework repo, thus when I pushed and created a pulled request I received an error:
    _There isn’t anything to compare.
master and joe_variation are entirely different commit histories._

  * By downloading the repo and not cloning it, the two repo's have completely separate commit histories, this there is nothing to compare.
  * FIX: Had a decent idea for a fix, but did not want to risk losing my commit history as the commit history was likely an essential metric for reviewing the work. Also, Case said not to worry about it since I was able to push the code and was viewable without a pull request.

* Modal research: need to play with jQuery's dialog to see if it would be a better use case

* One possible bug: the overlay does pop up consistently with the modal. It does seem to work when the page first opens, which would be all use cases for users.

## Developer Candidate Homework

At Clearhead we create experiences for our clients and run those experiences as A/B experiments (against the control, i.e. current experience) to collect data on how each variation performed.
We use third-party JavaScript to accomplish this.
The goal of this assignment is to write the code to show a new experience on the page.
The idea is to spend no more than a few hours on this. It is okay if you don't finish.

## Instructions

1. Clone this repo and run `npm install`. You will need to have Gulp installed globally. Just ask if you have questions about getting those tools installed.
2. Create a working branch of this repo.
3. Review the [design notes](https://docs.google.com/document/d/1bzc8tQQk-nkNn9Jx6UZ3bkDXcb0bISN32j2Yf4s0MmI/edit?usp=sharing).
4. Build the variation.
  - Write your code in `src/variation.js`.
  - You're welcome to use any libraries that exist on the site.
  - Feel free to use ES5 or ES6.
  - Only code for Chrome. If the code works when pasted into Chrome console, you should be good to go. Cross-browser support is important at Clearhead, but we also don't want this homework to take too long!
  - You can make your code modular by using CommonJS modules.
  - Run `gulp` in the command line to build the code in `src/variation.js` and output the result to `dist/variation.js`. This will do the following:
    - Transpile your code to ES5 if you have chosen to use ES6.
    - Browserify your code (files that you `require` or `import` in `variation.js` will be bundled together).
    - Browserify wraps your code in an immediately invoked function expression (so don't worry about starting your code with a semicolon and IIFE). The build tool takes care of all that ;-).
    - Output the variation code to `dist/variation.js`.
    - Note: There is no linting task. We don't expect you to know / conform to our linting standards. Feel free to add a linter if you wish.
5. Take notes along the way on your approach, problems, thoughts, etc., and add them to this README.
6. Feel free to ask any questions you need to as you work through the assignment. Just email case@clearhead.me.
7. Submit a pull request to the master branch of this repo and email case@clearhead.me.
