"use strict";

console.clear();

const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageLocalDefault } = require("apollo-server-core");
const { PersonApi } = require("./src/DataSource/PersonApi");
const { PersonResolver } = require("./src/Resolvers/PersonResolver");
const { PersonSchema } = require("./src/typeDefs/PersonSchema");

require("dotenv").config();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: PersonSchema,
  resolvers: PersonResolver,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  dataSources: () => ({
    personApi: new PersonApi(),
  }),
});

// The `listen` method launches a web server.
server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
