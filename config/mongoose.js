var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    mongoose.Promise = global.Promise;
    // var db = mongoose.connect('mongodb://10.7.0.3:27107/data/db');
    var db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    return db;
};
