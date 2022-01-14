const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        imgCover: {type:String, required:true},
        name: {type:String, required:true},
        imgs: [{type:String}],
    }
);

module.exports = mongoose.model("Project", ProjectSchema);