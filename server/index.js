const express = require("express");
const rest = express();
const graphql = express();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Implementiere hier die REST API





// Implementiere hier die GraphQL API

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

graphql.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));


rest.listen(process.env.PORT || 3000, () => { console.log("REST Server is running"); })
graphql.listen(process.env.PORT || 4000, () => { console.log("GraphQL Server is running"); });