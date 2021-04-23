const userModel = require('../models/index').userModel;

module.exports = {
    addUser: function (req, res) {
        try {
            const data = req.body;
            let userData = new userModel();
            userData.name = data.name;
            userData.emailId = data.emailId;
            userData.password = data.password;
            userData.save(err => {
                if (err) {
                    res.status(404).send({ error: err });
                } else {
                    res.status(200).send({ code: 'success', data: userData });
                }
            })
        } catch (err) {
            res.status(404).send({ error: err });
        }
    }
}

