exports.typeDefs = `
    type Query

    extend type Query {
        books: [Book!]!
    }

    extend type Query {
        authors: [Author!]!
    }

    type Book {
        id: ID!
        title: String!
        description: String
        shortTitle: String!
        author: Author!
    }

    type Author {
        id: Int!
        firstname: String!
        lastname: String!
    }
`