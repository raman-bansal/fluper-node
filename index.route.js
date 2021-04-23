var express = require("express");
var router = express.Router();
const Joi = require('joi');
var layout = require('./layout/index');

router.get("/get_like_product", layout.getLikedProduct);

router.post("/add_product", layout.addProduct);

router.get('/get_user_product', layout.getUserProduct);

router.post('/add_user', createAccountSchema, layout.addUser);

router.post('/login', layout.login)

module.exports = router;



function createAccountSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        emailId: Joi.string().email().required(),
        password: Joi.string().min(3).required(),
    });
    validateRequest(req, res, next, schema);
}


function validateRequest(req, res, next, schema) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        res.status(404).send({ code: 'failure', error: `Validation error: ${error.details.map(x => x.message).join(', ')}` });
    } else {
        req.body = value;
        next();
    }
}