const db = require('./db')

exports.resolvers = {
    Book: {
        shortTitle: (parent) => `${parent.id}-${parent.title}`,
        author: async (book, _, { authorLoader }) => authorLoader.load(book.authorId)
    },
    Query: {
        book: async (_, { id }) => db.findBookById(id),
        books: async () => db.findBooks(),
        authors: async () => db.findAuthors(),
    }
}