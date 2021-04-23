const productModel = require('../models/index').productModel;

module.exports = {
    getLikedProduct: async function (req, res) {
        try {
            let productData = await productModel.aggregate([
                { $match: { like: { $gt: 0 } } },
                { $group: { _id: '$name', total: { $sum: "$like" } } }])
            res.status(200).send({ code: 'success', data: productData });
        } catch (err) {
            res.status(404).send({ code: 'failure', error: err });
        }
    }
}
