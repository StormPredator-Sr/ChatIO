const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : "string",
    password : "string",
});
const messchema = new mongoose.Schema({
    to:"string",
    content:"string",
    from:"string",
    timestamp:"string"
},{
    collection : "msgs"
})


module.exports = userSchema;
module.exports = messchema;