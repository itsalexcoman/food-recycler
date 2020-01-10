var db = require('../models/index');

module.exports.add = (req, res) => {
  const newMembership = {
    group_id: req.params.gid,
    user_id: req.params.uid
  };

  db.Membership.create(newMembership)
    .then(
      (result) => {
        console.log("POST: Membership added successfully.")
        res.status(201).json(result)
      }
    )
    .catch(
      (err) => {
        console.log("POST: Adding membership created server error.")
        res.json(err)
      }
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
      () => {
        console.log("DELETE: Membership deleted successfully.")
        res.status(204).send()
      }
    )
    .catch(
      (err) => {
        console.log("DELETE: Deleting membership created server error.")
        res.json(err)
      }
    );
};
