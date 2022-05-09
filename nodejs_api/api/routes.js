'use strict';
module.exports = function (app) {
    // let productsCtrl = require('./controllers/ProductsController');

    // // todoList Routes
    // app.route('/products')
    //     .get(productsCtrl.get)
    //     .post(productsCtrl.store);

    // app.route('/products/:productId')
    //     .get(productsCtrl.detail)
    //     .put(productsCtrl.update)
    //     .delete(productsCtrl.delete);


    let languageCtrl = require('./controllers/LanguageAppController');

    // todoList Routes
    app.route('/categories')
        .get(languageCtrl.get)
        // .post(languageCtrl.store);

    app.route('/categories/:categoryId')
        .get(languageCtrl.detail)
        // .put(languageCtrl.update)
        // .delete(languageCtrl.delete);
};