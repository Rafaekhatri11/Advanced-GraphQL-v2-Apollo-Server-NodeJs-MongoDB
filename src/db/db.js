const MongooseClient = require("mongoose");



const url = `mongodb://localhost:27017/ecommerce`;
 
const connectToDB = MongooseClient.connect(url,{
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


MongooseClient.connection.once("open", function(){
    console.log("connection established");
})


module.exports = {
    connectToDB
}

