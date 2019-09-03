const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
var RegisterDetail = require('../model/register.model.js');
const fs = require('fs');


router.post('/saveRegister', (req, res) => {

    var data = {
        firstName: req.body.data.firstName,
        lastName: req.body.data.lastName,
        email: req.body.data.email,
        userName: req.body.data.userName,
        age: req.body.data.age,
        password: req.body.data.password

    };
    var newRegister = new RegisterDetail(data);
    newRegister.save((err, result) => {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(result)
            console.log(data);
        }
    })
})
router.get('/list', function (req, res) {
    RegisterDetail.find({}, function (err, doc) {
        if (err) { res.status(500).send({ message: err.message }); }
        else { res.json(doc) };
    })
})


router.post('/saveRegister1', (req, res) => {
    RegisterDetail.findOne('userName:req.body.userName', (err, existingUser) => {

        if (existingUser) {
            return (res.send({ success: false, message: 'User Already Exist' }))

        }
        else {
            console.log(req.body);
        }
    })
    var user = new register({
        userName: req.body.userName,
        password: req.body.password
        //Name: req.body.data.Name
    });
    user.save(function (err1, doc) {
        console.log(err1);
        if (err1) {
            res.json({ success: false, message: err1.message });
        } else {
            res.json({ success: true, message: 'data saved' });
        }
    });


    router.post('/signin', function (req, res) {
        register.findOne({ userName: req.body.userName }, '+password', function (err, user) {
            if (!user) {

                return res.send({ success: false, message: 'username is Incorrect' });
            }
            else {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (!isMatch) {
                        // console.log("Wrong user");
                        return res.send({ success: false, message: 'password is Incorrect' });
                    }
                    res.json({ success: true, token: auth.createJWT(user), Username: user.Username });
                })
            }
        })
    })


})

module.exports = router;