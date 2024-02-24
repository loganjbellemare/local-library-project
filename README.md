# local-library-project

Local library project for Thinkful

## Project Description

The scenario for this project was to create an app for a neighborhood library your neighbors wanted to put together for people to lend and borrow books from.  
My specific task was being responsible for building the dashboard which displays a list of different statistics for the library, and implementing the algorithms to display the correct information.  
This project was an exercise in practicing acquired knowledge of vanilla JavaScript, data types, using template literals, and using higher order Array methods like `map()`, `filter()`, `some()`, `every()`.  
The specific statistics displayed are:

- General stats on the library
- Top 5 most common genres found in library's directory
- Top 5 most popular books among patrons
- Top 5 most popular authors among patrons

Other requirements:

- `accounts.js`:
  - write a function to find a user by their userId
  - write a function to sort all accounts alphabetically by user's last name
  - write a function to find out how many times a specific user has borrowed any book from the library
  - write a function to find all books currently checked out by a specific user
- `books.js`:
  - write a function to find a specific author in library directory by their authorId
  - write a function to find a specific book by its bookId
  - write a function to filter library directory, to show all books currently checked out from library, followed by all books currently available at the library
  - write a function that lists all borrows on a specific book, with information on which account the book was checked out by, for each borrow history

### General Stats

General stats section displays

- how many total books are in the library's directory
- how many books are currently being borrowed
- how many accounts are registered with the library

### Algorithm implementation

All code written by me for this project can be found in `src` folder.  
All algorithms written for display stats are written in `home.js`  
All functions relating to user accounts can be found in `accounts.js`  
All functions relating to books in the library directory can be found in `books.js`
