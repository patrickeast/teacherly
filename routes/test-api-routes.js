const db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Test's Posts
    db.Test.findAll({include: [db.User]}).then(function(data) {
      
      // res.render('index', hbsObject);
      res.json(data);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2; Add a join to include all of the Test's Posts here
    db.Test.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      // console.log(dbTest)
      res.json(data);
    });
  });

  app.post("/api/users", function(req, res) {
    db.Test.create(req.body).then(function(dbTest) {
      res.json(dbTest);
    }).catch(function(err){
      console.log(err);
      res.json(err);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Test.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/login');

}

};