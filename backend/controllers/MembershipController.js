var db = require('../models/index');

module.exports.add = (req, res) => {
  const newMembership = {
    group_id: req.params.gid,
    user_id: req.params.uid
  };  
  db.Membership.create(newMembership)
  .then(
    result => { res.status(201).json(result) }
  )
  .catch(
    err => res.json(err)
  );
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
