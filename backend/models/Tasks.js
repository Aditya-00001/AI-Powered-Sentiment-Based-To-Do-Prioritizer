const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String},
    sentiment:{type:String, enum:['positive','negative','neutral'], default:'neutral'},
    priority:{type:String, default:'medium'},
},{timestamps:true});

module.exports = mongoose.model("Task",TaskSchema)
