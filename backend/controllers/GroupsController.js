var db = require('../models/index');

module.exports.findAll = (req, res) => {
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

module.exports.findOne = (req, res) => {
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

module.exports.findUsers = async (req, res) => {
    let group = await db.Groups.findByPk(req.params.id)
    if(group) {
        let users = await group.getUsers()
        res.status(200).json(users)
    }
    res.status(404).send()
}