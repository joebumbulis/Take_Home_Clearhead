* Began with understanding the task, how to access the DOM and add code to it .

Tasks List:
-[x] search Vitamix site for libraries to use: jQuery
-[x] build out file structure - index.html, sass, react
-[x] insert HTML into DOM using jQuery
-[x] create modal on timer  
  - [x] modal will pop up 3 seconds after landing on page
  - [x] get copy
  - [ ] display one RANDOM item from shopping cart
    - [ ] use GET request to access html on cart page
    - [ ] The item’s name and picture will link back to the item’s PDP (product detail page).
    - [ ] The item’s name has a hover state, turning to the actionable blue and underlined.
    - [ ] If there are 2+ items, there will be a small line of text beneath the item saying “Showing 1 of X”. REVIEW - example
-[x] There is a CTA button in the modal that reads “View Cart”. It will have a light blue hover state, consistent with all other blue buttons on Vitamix’s site.
-[x] A user can close the modal by clicking anywhere outside of the modal or the ‘X’ in the modal’s top right corner.


Planning:
[] When page loads / 3 sec timer starts
[] If cart is empty / nothing happens
[] If cart has at least one items / then modal launches
[] If cart has one or more items / then load with special message
[x] when x is clicked / modal closes - no actions
[x] when CTA button is clicked / then cart page opens & modal closes
[] when cart item pic or text clicked, / then opens to item page

* Set up file system:
  * Unclear about file structure approach- created index.html and main.css; but emailed Case about clarity around using React.js
    * No react, build in the actual DOM/ create experimental page.
  * emailed Case about clarity about how much build out does the landing page need in the comp v1.
  * created a local html file to use for the initial modal build
  * created separate CSS file, but will need to import it or write in the styling into the js

Notes/Issues:
* Began with creating a styling the modal. Copied colors from Vitamix.com.
* Created Overlay- problem with creating a click handler to click on the overlay (ie, click anywhere but the modal except the modal's "x" close button) in order to close the modal.
  * Solved it with this code and added the addClass for the overlay to the "x" handler
  ```$("#overlay").on("click", function() {
        $(".modal").addClass("hidden");
        $("#overlay").addClass("hidden");
    });
    ```

* Primary issue: GETting the cart information from the home page of Vitamix. Tried running a GET request to both https://www.vitamix.com/ & https://www.vitamix.com/Shop/Shopping-Cart in order to see if JSON came back as a usable object. This didn't work.
  * First tried a couple localstorage and cookies methods to no avail.
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
  * EMPTY: the `<div class='l-full-width'><div>Your Cart is Empty</div></div>`
  * Else:
    * id=0-item-price
    * li ... id="item0", "item1", etc, class="cart-item"

* Importing CSS into JS file: issue
  * First, had to figure out that the css needed to be called in an anonymous callback function.
  * Ran into major problem trying to get the jquery addClass to work with the import. Once imported, the class "hidden" with properties, display: none did not work.
  * FIX: instead of using addClass to add "hidden", using the event handlers on the "x" button as well as the overlay to call a function closeModal that makes active the hidden class with a property of none. 


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
