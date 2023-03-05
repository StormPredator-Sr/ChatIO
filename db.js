const mongoose = require("mongoose");



const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sreekar:laxman@cluster0.xkbrnxx.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};



module.exports = connectDB;