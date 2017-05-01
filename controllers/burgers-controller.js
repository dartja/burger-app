var express = require('express');
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var queries = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
    queries.show(function(data){
        //console.log(data);
        var data1 = {
            burgerData: data
        }
        res.render('index', data1);
    });
});

router.post('/create', function (req, res) {
    queries.add(req.body.item, function(data) {
        res.redirect('/');
    });
});

router.post('/update/:id', function (req, res) {
    queries.eat(req.params.id, function(data) {
        res.redirect('/');
    });
});

module.exports = router;