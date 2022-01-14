const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
    {
        name: {type:String, required: true},
        age: {type:Number},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);