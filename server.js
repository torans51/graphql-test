const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// Define the schema
const schema = buildSchema(`
  type Query {
    message: String!
  }
`)

// Define the root resolver
const root = {
  message: async () => {
    return 'Hello world'
  }
}


const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000)
