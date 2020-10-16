const express = require("express");
const rest = express();
const graphql = express();
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var { shops, products } = require('./db')

//TODO herausfinden wie argumente in subfields funktionieren
// Forntend test aufgabe finalsieren
// Aufgabe in github definieren für tester


// 1. Navigiere in das client Verzeichnis und führe npm install aus
// 2. Navigiere in das server Verzeichnis und führe npm install aus
// 3. Navigiere zurück zum root Verzeichnis und führe npm run dev aus
// 4. Anschließend erreichst du die REST API unter localhost:3000 und GraphQL unter localhost:4000
// 5. Den Client ereichst du unter localhost:8080


//-----------------REST API-----------------------------
// Implementiere hier die REST API







//-----------------GRAPHQL API-----------------------------
// Implementiere hier die GraphQL API
// Du kannst zum testen localhost:4000/graphql aufrufen

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    shop(id: String!): Shop
  },
  type Mutation {
    updateShopName(id: String, name: String): Shop
  },
  type Shop {
    id: String,
    name: String,
    address: String,
    products(productId: String!): [Product],
  },
  type Product {
    id: String,
    name: String,
    weight: String,
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  shop: ({id},{productId}) => {
    console.log(productId , "ÖP")
    return shops.find(s => s.id == id);
  },
  updateShopName: (payload) => {
      const shop = shops.find(s => s.id == payload.id)
      shop.name = payload.name
      return shop
  },
  products:(payload) => {
      console.log("asdasd")
      return products.filter(s => s.id == payload.id)
  }
};

graphql.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));


rest.listen(process.env.PORT || 3000, () => { console.log("REST Server is running"); })
graphql.listen(process.env.PORT || 4000, () => { console.log("GraphQL Server is running"); });