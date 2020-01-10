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

module.exports.delete = (req, res) => {
  db.Membership.destroy({
    where: {
      group_id: req.params.gid,
      user_id: req.params.uid
    }
  })
  .then(
    res.status(204).send()
  )
  .catch(
    err => res.json(err)
  );
};
