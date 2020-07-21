    const { gql } = require("apollo-server");

 const _AuthorTypeDefs = gql`
    
type Author {
    id: ID!
    name: String!
    description: String
    books: [Book]!
}



input NewAuthorInput{
    name: String!
    description: String
}

input AuthorIdInput{
    id: ID!
}
input UpdateAuthorInput{
    id: ID!
    name: String!
    description: String
}

type Query{
    authors: [Author]!
    authorById(input: AuthorIdInput): Author!
}

 type Mutation{
     addNewAuthor(input: NewAuthorInput) : Author!
     updateAuthor(input: UpdateAuthorInput) : Author!
     deleteAuthor(input: AuthorIdInput): Author!
 }
 `


 module.exports = _AuthorTypeDefs;