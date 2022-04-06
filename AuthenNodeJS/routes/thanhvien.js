var express = require('express');
var router = express.Router();
var db = require('../models/database');
router.get('/dangky', function (req, res) {
    res.render("dangky.ejs");
});
module.exports = router;