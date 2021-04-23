"use strict";
const mongoose = require("mongoose");

const product = new mongoose.Schema(
    {
        name: { type: String },
        like: { type: Number },
        dislike: { type: Number }
    },
    {
        collection: "productModel"
    }
);
module.exports = mongoose.model("productModel", product);
