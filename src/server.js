const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const { typeDefs } = require('./typedefs')
const { resolvers } = require('./resolvers')
const { authorLoader } = require('./dataloader')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: {
    authorLoader
  },
  graphiql: true,
}))

app.listen(4000)
