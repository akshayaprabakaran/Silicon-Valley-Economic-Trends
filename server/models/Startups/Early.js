const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EarlySchema = new Schema({
    years: {
        type: String,
        required: true
    },
    CAnumbers: {
        type: Number,
        required: true
    },
    SFnumbers: {
        type: Number,
        required: true
    },
    SVnumbers: {
        type: Number,
        required: true
    },
    CAEarly:{
        type: Number,
        required: true,
    },
    SFEarly:{
        type: Number, 
        required: true
    },
    SVEarly:{
        type: Number,
        required:true
    }
});

module.exports = Early = mongoose.model("early", EarlySchema);