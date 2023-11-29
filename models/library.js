const mongoose = require("mongoose")
const librarySchema = mongoose.Schema({
name:{
    type:String,
    minlength:1,
    maxlength:15,
},
timings: {
    type:Number,
    min:0,
    max:12,
},
place: {
    type:String,

},
})
module.exports = mongoose.model("library", librarySchema)

