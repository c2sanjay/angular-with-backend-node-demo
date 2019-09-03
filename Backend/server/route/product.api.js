const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
var ProductDetail = require('../model/product.model.js');
const multer = require('multer');
const fs = require('fs');


// const product_controller = require('../controllers/product.controller');
// router.get('/test', product_controller.test);
// router.post('/save', product_controller.product_save);
// router.get('/:id', product_controller.product_details);
// router.put('/:id/update', product_controller.product_update);
// router.delete('/:id/delete', product_controller.product_delete);


/*var filename = '';
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        filename: file.originalname;
        cb(null, filename);
    }
})


var upload = multer({ storage: storage })
, upload.array("uploads[]", 12)
*/

router.post('/saveProduct', (req, res) => {
    var data = {
        // productImage: req.body.data.productImage,
        productName: req.body.data.productName,
        productDescription: req.body.data.productDescription,
        productCode: req.body.data.productCode,
        productCreated: req.body.data.productCreated,
        ProductPrice: req.body.data.ProductPrice,

    };

    var newProduct = new ProductDetail(data);
    newProduct.save((err, result) => {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(result)
            console.log(data);
        }
    })
})

router.get('/getProduct', (req, res) => {
    ProductDetail.find({}, function (err, docs) {
        if (err) {
            console.log('restApp erro');
            res.status(500).send({ messg: err.message });
        }
        else {
            res.json(docs)
            console.log(docs);

        }
    })
})

router.put('/updateProduct', (req, res) => {
    var query = { "_id": mongojs.ObjectId(req.body.data._id) }
    // console.log('test ' + query);

    var update = {
        //productImage: req.body.data.productImage,
        productName: req.body.data.productName,
        productDescription: req.body.data.productDescription,
        productCode: req.body.data.productCode,
        productCreated: req.body.data.productCreated,
        ProductPrice: req.body.data.ProductPrice,
    }
    ProductDetail.findOneAndUpdate(query, update, (err, docs) => {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(docs);
            console.log('product updated');
        }
    })
})

router.delete('/deleteProduct/:id', (req, res) => {
    ProductDetail.findByIdAndRemove(req.params.id, (err, docs) => {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(docs);
            // fs.exists('./uploads/' + docs.productImage, function (result) {
            //     console.log(result);
            //     if (result) {
            //         fs.unlink('./uploads/' + docs.productImage, function (err1) {
            //             if (err1) { }
            //         });
            //         res.json(docs);
            //     }
            // })
        }
    })
})


module.exports = router;