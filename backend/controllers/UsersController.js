var db = require('../models/index');

module.exports.findAll = (req, res) => {
    db.Users.findAll().then(
           (results) => {
               res.status(200).send({
                   status: "Users.findAll() success",
                   results: results
               });
           }
       ).catch(() => {
           res.status(500).send({
               status: "Users.findAll() error"
           })
       })
};

module.exports.findOne = (req, res) => {
    db.Users.findByPk(req.params.id, {
        include: [{
          model: db.Users
        }]
      }).then(
        (result) => {
            if(result) {
                res.status(200).send(result)
            } else {
                res.status(404).send()
            }
        }
    )
}