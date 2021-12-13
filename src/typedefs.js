exports.typeDefs = `
    type Query
    type Mutation

    extend type Query {
        book(id: ID!): Book
        books: [Book!]!
    }

    extend type Query {
        authors: [Author!]!
    }
    
    extend type Mutation {
        createAuthor(author: AuthorInput): Author!
    }
    
    input AuthorInput {
        firstname: String!
        lastname: String!
    }

    type Book {
        id: ID!
        title: String!
        description: String
        shortTitle: String!
        author: Author!
        reviews: [Review!]!
    }

    type Author {
        id: Int!
        firstname: String!
        lastname: String!
    }

    type Review {
        id: ID!
        body: String!
        from: String
    }
`