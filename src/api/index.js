const { makeExecutableSchema } = require("apollo-server");
const {merge} = require("lodash");
const _AuthorTypeDefs = require("./author/author.schema");
const _AuthorResolvers = require("./author/author.resolvers");
const _BookTypeDefs = require("./book/book.schema");
const _BookResolvers = require("./book/book.resolvers");

//You probably thinking that what is these models doing here. Because if we remove them it will not
// execute and we can't able to get models for context parameter because one time execution is very important.
// You can check context arguments in resolvers for your statisfaction.

const Author = require("../api/author/author.modal");
const Book = require("../api//book/book.modal");

const mergeschema = makeExecutableSchema({
    typeDefs:[_AuthorTypeDefs, _BookTypeDefs], // for multiple typedef you need to pass it to array.
    resolvers: merge({},_AuthorResolvers,_BookResolvers) // for multiple resolver access you need to merge it using merge module so that you can access it in every typedef
})

module.exports ={ mergeschema }
