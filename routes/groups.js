var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/:id/join', function(req, res, next) {
    var x = "accepted";
    // var x = "joined";
    // var x = "deny";
    switch(x) {
        case "accepted":
            var status = 202;
            var http = require('http');
            res.status(status).end(http.STATUS_CODES[status]);
            break;
        case "joined":
            res.send("You have joined.");
            break;
        case "deny":
            var err = new Error('You have been rejected.');
            err.status = 410;
            return next(err);
            break;
    }
});

module.exports = router;
