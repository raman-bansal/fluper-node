const productModel = require('../models/index').productModel;

module.exports = {
    addProduct: function (req, res) {
        try {
            const data = req.body;
            productModel.insertMany(data).then((result) => {
                res.status(200).send({ code: 'success', data: result });

            }); 
        } catch (err) {
            res.status(404).send(err);
        }
    }
}
