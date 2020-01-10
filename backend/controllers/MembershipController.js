var db = require('../models/index');

module.exports.add = (req, res) => {
    db.Membership.create({
      usersId: req.body.usersId,
      groupsId: req.body.groupsId
    })
      .then(group_memberships => {
        res.json(group_memberships);
      })
      .catch(err => res.json(err));
  };

module.exports.remove = (req, res) => {
    db.Membership.destroy({
      where: { id: req.params.id }
    }).then(group_membership => {
      res.json(group_membership);
    });
  };
