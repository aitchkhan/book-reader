'use strict';

const fs = require('fs');
const config = require('../../../../../config');
module.exports = {
  index
};

function index(req, res, next) {
    fs.readdir(config.pathToBooks, (err, books) => {
        res.json({books});
    });
}


