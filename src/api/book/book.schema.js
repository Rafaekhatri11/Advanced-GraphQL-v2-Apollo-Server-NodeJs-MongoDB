const { gql } = require("apollo-server");




const _BookTypeDefs = gql`
    type Book {
         id: ID!
         name: String!
         Authorid: Author!
    }

    input BookIdInput {
        id: ID!
    }

    input AddBookInput{
        name: String!
        Authorid: String!
    }

    input modifyBook{
        id: ID!
        name: String!
    }

    extend type Query {
        books: [Book]!
        bookById(input:BookIdInput): Book!
    }

    extend type Mutation{
         addBook(input: AddBookInput): Book!
         updateBook(input: modifyBook): Book!
         deleteBook(input: modifyBook): Book!
     }
`


module.exports = _BookTypeDefs;