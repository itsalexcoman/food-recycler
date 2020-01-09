var db = require('../models/index');

//module.exports.getUsersByGroup = (req, res) => {
    //...
//}


module.exports.add = (req, res) => {
    db.GroupMembership.create({
      usersId: req.body.usersId,
      groupsId: req.body.groupsId
    })
      .then(group_memberships => {
        res.json(group_memberships);
      })
      .catch(err => res.json(err));
  };

module.exports.delete = (req, res) => {
    db.GroupMembership.destroy({
      where: { id: req.params.id }
    }).then(group_membership => {
      res.json(group_membership);
    });
  };
