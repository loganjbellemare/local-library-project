function findAuthorById(authors, id) {
  //use find method to find author.id that matches parameter id and return that author object
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  //use find method to find books.id that matches parameter id and return book object
  return books.find((book) => String(book.id) === String(id));
}

function partitionBooksByBorrowedStatus(books) {
  //filter books to find !books.borrows.returned
  const borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  //filter books to find books.borrows.returned
  const booksReturned = books.filter((book) => book.borrows[0].returned);
  //return result as an array with two arrays of objects, first array containing books that are currently being borrowed, second array being books that have been returned
  return [borrowedBooks, booksReturned];
}

function getBorrowersForBook(book, accounts) {
  //get borrow history from book
  const borrowHistory = book.borrows;
  //map accounts object to find accounts.id that match borrowHistory.id
  const transactions = borrowHistory.map((borrow) => {
    //find account.id that matches borrow.id
    const account = accounts.find((user) => user.id === borrow.id);
    return {
      ...borrow,
      ...account
    };
  });
  return transactions.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
