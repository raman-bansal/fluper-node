const productModel = require('../models/index').productModel;
const userModel = require('../models/index').userModel;
module.exports = {
    getUserProduct: async function (req, res) {
        try {
            const productData = await productModel.find();
            const userData = await userModel.find();
            res.status(200).send({ code: 'success', data: { userData: userData, productData: productData } });
        } catch (err) {
            res.status(404).send({ error: err });
        }
    }
}
