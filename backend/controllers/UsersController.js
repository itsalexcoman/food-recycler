var db = require('../models/index');

module.exports.getAll = (req, res) => {
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

module.exports.getOne = (req, res) => {
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
module.exports.add = (req, res) => {
    db.Users.create({
      name: req.body.name
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  };

module.exports.update = (req, res) => {
    db.Users.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedUsers => {
        res.json(updatedUsers);
      })
      .catch(err => res.json(err));
  };

module.exports.delete =  (req, res) => {
    db.Users.destroy({
      where: { id: req.params.id }
    })
      .then(users => {
        res.json(users);
      })
      .catch(err => res.json(err));
  };
