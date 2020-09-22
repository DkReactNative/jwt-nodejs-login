var jwt = require("jsonwebtoken");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.logout = (req, res) => {
  //jwt.parseToken.logout(token)
  res.status(200).send("Log out.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

