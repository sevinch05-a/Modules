export async function fetchBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel set in the Jazz Age on Long Island.', genre: 'Mystery', image: 'images/gatsby.jpg' },
                { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racial injustice in the Deep South.', genre: 'Romance', image: 'images/mockingbird.jpg' },
                { id: '3', title: '1984', author: 'George Orwell', description: 'A dystopian novel about totalitarianism.', genre: 'IT', image: 'images/book3.jpg' },
                { id: '4', title: 'Moby Dick', author: 'Herman Melville', description: 'The story of Captain Ahab’s obsession with a giant white whale.', genre: 'Fantasy', image: 'images/book4.jpg' }
                
            ]);
        }, 1000); 
    });
}