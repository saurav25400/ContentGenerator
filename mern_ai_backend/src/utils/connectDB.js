const mongoose=require('mongoose');

 const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(
            "mongodb+srv://saurav25400:etgNxqyVj5SynoLu@clustermernai.fjiiyro.mongodb.net/mern_ai?retryWrites=true&w=majority&appName=Clustermernai");
        console.log("connected to mongodb successfully : "+conn.connection.host);

    }
    catch(error){
        console.error(error.message);
        process.exit(1);

    }


};
module.exports=connectDB;