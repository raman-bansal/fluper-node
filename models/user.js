"use strict";
const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
        name: { type: String },
        emailId: { type: String },
        password: { type: String },
        token: { type: String }
    },
    {
        collection: "userModel"
    }
);
module.exports = mongoose.model("userModel", user);
