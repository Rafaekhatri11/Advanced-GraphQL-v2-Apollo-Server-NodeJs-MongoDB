const { ApolloServer } = require("apollo-server");
const {mergeschema} = require('./src/api/index');
const { connectToDB } = require("./src/db/db");
require('./src/db/db')
const port = 4000 || process.env.PORT;


// The ApolloServer constructor requires two parameters: your schema but here mergeschema have multiple resolvers and typedef.
// You probably thinking that what is context property doing here its basically the property from here 
// we can provide all mongoDB models in all resolvers.
const server = new ApolloServer({
  schema : mergeschema, 
  context: async () => {
    const db = await connectToDB
    return {db}
  }
});



server.listen(port, () => {
  console.log(`🚀 Server ready at ${port}`);
})
