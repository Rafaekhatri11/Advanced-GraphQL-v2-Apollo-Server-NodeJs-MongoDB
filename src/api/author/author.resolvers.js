const authors = async (_,args,context, info) => {
    console.log("line no 2" , context)
    const author = await context.db.models.author.find({});
    if(!author) throw new Error('Authors does not exist');
    return author
}


const authorById = async (_,args,context, info) => {
    const authorById = await context.db.models.author.findById(args.input.id);
    if(!authorById) throw new Error('Authors does not exist');
    return authorById
}




const addNewAuthor = async (_ , args , context, info) => {
        const {name, description} = args.input;
       
         var author = new context.db.models.author({name,description});
        return await author.save()
}

const updateAuthor = async (_ , args , context, info) => {
    const {name, description,id} = args.input;  
    
     return await context.db.models.author.findOneAndUpdate({_id: id},{name,description},{new: true});
}

const deleteAuthor = async (_ , args , context, info) => {
    const {id} = args.input;  
     return await context.db.models.author.findOneAndRemove({_id: id});
}

// Resolver function for author. Here Author is basically a type of schema and so that you can
// use this as a reference to get the all author books by their Id. 
const _AuthorResolvers = {
    Query: {
        authors,
        authorById
    },
    Mutation: {
        addNewAuthor,
        updateAuthor,
        deleteAuthor
    },
    Author:{
        books : async (parent,_,ctx) => {
            return ctx.db.models.book.find({Authorid:parent._id})
        }
    }
   
}



module.exports = _AuthorResolvers