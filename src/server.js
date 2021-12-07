const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const { typeDefs } = require('./typedefs')
const { resolvers } = require('./resolvers')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  graphiql: true,
}))

app.listen(4000)
