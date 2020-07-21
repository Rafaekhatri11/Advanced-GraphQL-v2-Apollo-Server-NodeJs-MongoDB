
const books = async (_, args, context, info) => {
    const books = await context.db.models.book.find({});
    if (!books) throw new Error('Book does not exist');
    return books
}



const bookById = async (_, args, context, info) => {
    const BookById = await context.db.models.book.findById(args.input.id);
    if (!BookById) throw new Error('Book does not exist');
    return BookById
}



const addBook = async (_, args, context, info) => {
    const { name, Authorid } = args.input;
    var book = new context.db.models.book({ name, Authorid });
    return await book.save()
}

const updateBook = async (_, args, context, info) => {
    const { name, id } = args.input;
    return await context.db.models.book.findOneAndUpdate({ _id: id }, { name},{ new: true });
}

const deleteBook = async (_, args, context, info) => {
    const { id } = args.input;
    return await context.db.models.book.findOneAndRemove({ _id: id });
}



// Resolver for Books here as you know the third one Book has been reference with author models
// so whenever you wnat to see the book author it will return the author name also.
const _BookResolvers = {
    Query: {
        books,
        bookById
    },
    Mutation: {
        addBook,
        updateBook,
        deleteBook
    },
    Book:{
        Authorid : async (parent,_,ctx) => {
            
            return await ctx.db.models.author.findById(parent.Authorid)
            
        }
       
    }
}


module.exports = _BookResolvers