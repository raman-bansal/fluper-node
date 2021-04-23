const addUser = require('./addUser');
const addProduct = require('./addProduct');
const getLikedProduct = require('./getLikeProduct');
const getUserProduct = require('./getUserProduct');
const login = require('./login');


module.exports = {
    addUser: addUser.addUser,
    addProduct: addProduct.addProduct,
    getLikedProduct: getLikedProduct.getLikedProduct,
    getUserProduct: getUserProduct.getUserProduct,
    login: login.login
}