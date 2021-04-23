var mongoose = require('mongoose');
var environment = require('../environment/environment');

mongoose.connect(environment.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("connection failed");
    } else {
        console.log("connection success");
    }
})