const db = require('./db')

exports.resolvers = {
    Book: {
        shortTitle: (parent) => `${parent.id}-${parent.title}`,
        author: async (book, _, { authorLoader }) => authorLoader.load(book.authorId),
        reviews: async (book, _, { reviewsLoader }) => {
            // return db.findReviews({ bookId: book.id })
            return reviewsLoader.load(book.id)
        }
    },
    Query: {
        book: async (_, { id }) => db.findBookById(id),
        books: async () => db.findBooks(),
        authors: async () => db.findAuthors(),
    },
    Mutation: {
        createAuthor: async (_, input) => {
            console.log(input)
            return { ...input.author, id: 12345 }
        }
    }
}
