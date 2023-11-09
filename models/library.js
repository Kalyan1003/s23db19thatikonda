const mongoose = require("mongoose")
const librarySchema = mongoose.Schema({
name: String,
timings: Number,
place: String
})
module.exports = mongoose.model("library", librarySchema)