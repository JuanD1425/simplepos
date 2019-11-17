var express = require(“express”);
var router = express.Router();

router.get(“/”, function(req, res, next) {
    res.sendfile(“../../client/public/signin.html”);
});

module.exports = router;
