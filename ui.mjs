export function displayBooks(books, onOrder) {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = ''; 

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.description}</p>
            <button data-id="${book.id}" class="order-button">Order</button>
        `;
        bookListElement.appendChild(bookElement);
    });

    
    bookListElement.querySelectorAll('.order-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const bookId = event.target.getAttribute('data-id');
            onOrder(bookId);
        });
    });
}

export function displayOrderConfirmation(order) {
    const bookListElement = document.getElementById('book-list');
    const confirmationElement = document.createElement('div');
    confirmationElement.classList.add('order-confirmation');
    confirmationElement.innerHTML = `
        <h2>Order Confirmed!</h2>
        <p>Thank you for ordering "${order.title}" by ${order.author}.</p>
        <p>Order ID: ${order.id}</p>
    `;
    bookListElement.innerHTML = ''; 
    bookListElement.appendChild(confirmationElement);
}