import { displayBooks, displayOrderConfirmation } from './ui.js';
import { fetchBooks } from './data.js';
import { placeOrder } from './order.js';

let books = [];


function filterBooksByGenre(genre) {
    if (genre === 'All') {
        displayBooks(books, handleOrder);
    } else {
        const filteredBooks = books.filter(book => book.genre === genre);
        displayBooks(filteredBooks, handleOrder);
    }
}

async function handleOrder(bookId) {
    try {
        const order = await placeOrder(bookId, books);
        displayOrderConfirmation(order);
    } catch (error) {
        console.error('Error placing order:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        books = await fetchBooks();
        displayBooks(books, handleOrder);

        
        document.getElementById('all-books').addEventListener('click', () => filterBooksByGenre('All'));
        document.getElementById('mystery-books').addEventListener('click', () => filterBooksByGenre('Mystery'));
        document.getElementById('fantasy-books').addEventListener('click', () => filterBooksByGenre('Fantasy'));
        document.getElementById('romance-books').addEventListener('click', () => filterBooksByGenre('Romance'));
        document.getElementById('it-books').addEventListener('click', () => filterBooksByGenre('IT'));
        
    } catch (error) {
        console.error('Error fetching books:', error);
    }
});