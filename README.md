# React + Redux Training

##Run
    yarn
    yarn dev
    
##Exercises
- Login user and redirect to `/` route
- Hide header and redirect to `/login` on logout
- Extract list of books from `book.js` as separate component `bookList.js`
- Create new common component `toggle.js`. Compose it by reusing already existed two `button.js` components
- Finish books search functionality
- Create new route `/book/:id/authors` and new component `bookAuthors.js` to display book’s authors instead of book’s description. Change links (books titles) to redirect to new route
- Extract books search input and button as separate component `bookSearch.js` (keep `fetchBookAction` in `book.js` file.
* Use Toggle component to decide if links (books titles) should redirect to their descriptions or authors
