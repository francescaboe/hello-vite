class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

class Inventory {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books = [...this.books, book];
  }

  getTotalBooks() {
    return this.books.length;
  }

  getBookById(id) {
    const book =  this.books.find(b => String(b.id) === String(id));
    if(!book){
      throw Error(`no book with id ${id} found`);
    }
    return book;
  }

  changeBookQuantity(id, quantity){
    const newBooks = this.books.map(b => String(b.id) === String(id) ? { ...b, quantity} : b)
    if(JSON.stringify(newBooks) === JSON.stringify(this.books)){
      throw Error(`no book with id ${id} found`);
    }
    this.books = newBooks;
  }

  getBooksByAuthor(author){
    return this.books.filter(b => b.author === author) || `No books by ${author} found`;

  }

  sellBooks(id, soldQuantity){
    // check that sold quantity is not bigger than book quantity (incl 0)
    const book = this.getBookById(id);
    const oldQuantity = book.quantity;
    if(oldQuantity === 0){
      throw Error(`This book is out of stock`);
    }
    if(oldQuantity < soldQuantity){
      throw Error(`there are only ${oldQuantity} books left`)
    }
    book.quantity -= soldQuantity;
  }

  restockBook(id, addQuantity){
    const book = this.getBookById(id);
    book.quantity+=addQuantity;

  }

  getInventoryTotalValue(){
    return this.books.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  }

  applyDiscount(id, discount, minPrice){
    const book = this.getBookById(id);
    if(book.price >=minPrice){
      return book.price*(discount/100)
    }
    return book.price;
  }

  lowStockReport(){
    return this.books.filter(b => b.quantity < 5)
  }

  findMostExpensiveBook(){
    return this.books.reduce((prev, curr)=> prev.price < curr.price ? curr : prev , {price:0})
  }


}

// Example usage:
const inventory = new Inventory();
inventory.addBook(new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 15.99, 5));
console.log(inventory.getTotalBooks()); // Should output: 1