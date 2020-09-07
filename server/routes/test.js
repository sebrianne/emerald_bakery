var express = require("express");
var router = express.Router();
var fs = require("fs");
const data = './routes/data.json';

const filters = {
    reset: true,
    category: "",
    vegan: false,
    vegetarian : false,
    glutenfree: false,
    nutfree: false,
    dairyfree: false,
    lowsugar: false
};

const json_values = {
    glutenfree: "gluten-free",
    nutfree : "nut-free",
    dairyfree: "dairy-free",
    lowsugar: "low sugar"
}

router.post("/", function(req, res) {
    
});

router.get("/", function(req, res, next) {

    let rawdata = fs.readFileSync(data);
    let parseddata = JSON.parse(rawdata);
    let stringdata = JSON.stringify(parseddata);

    res.send(stringdata);
});

module.exports = router;