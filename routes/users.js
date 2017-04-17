var express = require('express');
var multer  = require('multer');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    // Database create a user...
    res.send(req.body);
});

// 上傳頭像檔案
var upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, 'uploads/'),
        filename: (req, file, cb) => cb(null, file.originalname)
    }),
    limits: { 
        fileSize: 92160
    }
}).single('imageupload');
router.post('/avatar/upload', function(req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            var err = new Error('Request Entity Too Large');
            err.status = 413;
            return next(err);
        }
        // Everything went fine
        res.send("File upload sucessfully.");
    });
});

router.get('/:id/profile', function(req, res, next) {
  res.render('users/profile', { title: '修改個人資料' });
});

router.post('/:id/profile', function(req, res, next) {
    // var status = 200;
    var status = 204;
    // var status = 205;
    switch(status) {
        case 204:
        case 205:
            var http = require('http');
            res.status(status).end(http.STATUS_CODES[status]);
            break;
        default:
            res.send("Data Upated.");
    }
});

module.exports = router;
