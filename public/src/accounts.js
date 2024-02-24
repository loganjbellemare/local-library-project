function findAccountById(accounts, id) {
  return accounts.find((account) => String(account.id) === String(id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last < accountB.name.last ? -1 : 1));
}

function getTotalNumberOfBorrows(account, books) {
   // Use the reduce method to count the total number of borrows for the given account
   return books.reduce((total, book) => {
    // Count how many times the account ID appears in the borrows array
    const borrowCount = book.borrows.filter((borrow) => borrow.id === account.id).length;
    // Add the borrowCount for the current book to the total
    return total + borrowCount;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;

  // Filter the books array to find the books borrowed by the given account and not returned
  const borrowedBooks = books.filter((book) => {
    // Check if the book is currently borrowed by the account and not returned
    const isBorrowed = book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
    return isBorrowed;
  });

  // Map over the borrowedBooks array to add the author information to each book
  const booksWithAuthors = borrowedBooks.map((book) => {
    const authorId = book.authorId;
    const author = authors.find((author) => author.id === authorId);
    // Return a new object containing the book details and the author information
    return {
      ...book,
      author,
    };
  });

  return booksWithAuthors;
}
  // nest author object inside of book object
  //return array of book objects with borrowed.id that matches account and borrowed.returned false


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
