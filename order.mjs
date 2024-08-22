export async function placeOrder(bookId, books) {
    
    const book = books.find(b => b.id === bookId);
    if (!book) throw new Error('Book not found');
    
   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: Date.now(), 
                ...book
            });
        }, 500);
    });
}