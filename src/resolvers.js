const db = require('./db')

exports.resolvers = {
    Book: {
        shortTitle: (parent) => `${parent.id}-${parent.title}`,
        author: async (book, _, { authorLoader }) => authorLoader.load(book.authorId)
    },
    Query: {
        books: async () => db.findBooks(),
        authors: async () => db.findAuthors(),
    }
}