const userModel = require("../models/index").userModel;
var jwt = require("jsonwebtoken");
var env = require("../environment/environment");

module.exports = {
    login: (req, res) => {
        try {
            const reqData = req.body;
            userModel.findOne({emailId:reqData.emailId}, function (err, user) {
                if (err) return res.status(401).send(err);
                if (!user) return res.status(401).send({code:'failure', message: "Invalid emailId or password" });
                var token = jwt.sign({ id: user._id }, env.secret, {
                    expiresIn: 86400
                });
                user['token'] = token;
                res.status(200).send({ code: 'success', data: user });
            });
        } catch (err) {
            res.status(401).send(err);
        }

    }
};
