const db = require('./db')

exports.resolvers = {
    Book: {
        shortTitle: (parent) => `${parent.id}-${parent.title}`,
        author: async (book, _, { authorLoader }) => authorLoader.load(book.authorId),
        reviews: async (book) => {
            const reviews = await db.findReviews()
            return reviews.filter(r => r.bookId === book.id)
        }
    },
    Query: {
        book: async (_, { id }) => db.findBookById(id),
        books: async () => db.findBooks(),
        authors: async () => db.findAuthors(),
    }
}