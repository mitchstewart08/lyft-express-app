"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = 3000;
app.use(express.json());
for (var j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}
app.post('/test', function (req, res) {
    var string_to_cut = req.body.string_to_cut;
    if (!string_to_cut) {
        res.send("ERROR: Please send a JSON payload with a key 'string_to_cut'");
    }
    function cutString(str, num) {
        return str.split('').map(function (el, i) { return (i + 1) % num === 0 ? el : ''; }).join('');
    }
    res.send({ return_string: cutString(string_to_cut, 3) });
});
app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
