const { ApolloServer } = require("apollo-server");
const { products, categories, reviews } = require("./db");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { typeDefs } = require("./schema");

/* Resolver: Sono funzioni che ritornano data sotto forma di schema. Esempio: fruits: () => {return ["apple"]}.
   I resolvers hanno 3 argomenti: parent, args, context */

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Product, Mutation },
  // context: {
  //   products,
  //   categories,
  //   reviews,
  // },
});

server.listen().then(({ url }) => {
  console.log(`Server running on port ${url}`);
});
