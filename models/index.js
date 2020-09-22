const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.User = require("./userModel");
db.Role = require("./roleModel");
db.ROLES = ["user", "admin"];
module.exports = db;