var express = require(“express”);
var router = express.Router();

router.get(“/404”, function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../client/public/404.html"));
});

module.exports = router;
