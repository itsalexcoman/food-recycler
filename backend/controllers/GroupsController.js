var db = require('../models/index');


module.exports.getAll = (req, res) => {
    db.Groups.findAll({
        include: [{
          model: db.Users
        }]
      }).then(
           (results) => {
               res.status(200).send({
                   status: "Groups.findAll() success",
                   results: results
               });
           }
       ).catch(() => {
           res.status(500).send({
               status: "Groups.findAll() error"
           })
       })
};

module.exports.getOne = (req, res) => {
    db.Groups.findByPk(req.params.id).then(
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
    db.Groups.create({
      name: req.body.name
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  };

 module.exports.update = (req, res) => {
    db.Groups.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedGroups => {
        res.json(updatedGroups);
      })
      .catch(err => res.json(err));
  };

  module.exports.delete = (req, res) => {
    db.Groups.destroy({
      where: { id: req.params.id }
    })
      .then(groups => {
        res.json(groups);
      })
      .catch(err => res.json(err));
  };
