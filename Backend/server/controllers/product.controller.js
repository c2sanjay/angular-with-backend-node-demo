
const Product = require('../model/product.model');

exports.test = (req, res) => {
    res.send('Greeting from The Test Controller!');
}

exports.product_save = function (req, res) {

    var data = {
        name: req.body.data,
        price: req.body.data
    }
    var productDetail = new product(data);

    productDetail.save(function (err, result) {
        if (err) {
            res.status(500).send({ messg: err.message });
        }
        else {
            //res.json(result);
            res.send('Product Created successfully')
        }
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};