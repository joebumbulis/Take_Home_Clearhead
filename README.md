* Began with understanding the task, how to access the DOM and add code to it .

Tasks List:
-[ ] search Vitamix site for libraries to use
-[ ] build out file structure - index.html, sass, react
-[ ] insert HTML into DOM using javascript
-[ ] create modal on timer  
  - [ ] modal will pop up 3 seconds after landing on page
  - [ ] get copy
  - [ ] display one RANDOM item from shopping cart
    - [ ] use cookies or local storage (window.) to gain access to the shopping cart
    - [ ] The item’s name and picture will link back to the item’s PDP (product detail page).
    - [ ] The item’s name has a hover state, turning to the actionable blue and underlined.
    - [ ] If there are 2+ items, there will be a small line of text beneath the item saying “Showing 1 of X”. REVIEW - example
-[ ] There is a CTA button in the modal that reads “View Cart”. It will have a light blue hover state, consistent with all other blue buttons on Vitamix’s site.
-[ ] A user can close the modal by clicking anywhere outside of the modal or the ‘X’ in the modal’s top right corner.
-[ ]

Planning:
[] When page loads / 3 sec timer starts
[] If cart is empty / nothing happens
[] If cart has at least one items / then modal launches
[] If cart has one or more items / then load with special message
[] when x is clicked / modal closes - no actions
[] when CTA button is clicked / then cart page opens & modal closes
[] when cart item pic or text clicked, / then opens to item page

* Set up file system:
  * Unclear about file structure approach- created index.html and main.css; but emailed Case about clarity around using React.js
    * No react, build in the actual DOM/ create experimental page.
  * emailed Case about clarity about how much build out does the landing page need in the comp v1.

Notes:

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