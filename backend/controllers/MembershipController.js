var db = require('../models/index');

module.exports.add = (req, res) => {
  const newMembership = {
    group_id: req.params.gid,
    user_id: req.params.uid
  };

  db.Membership.create(newMembership)
    .then(
      (result) => {
        console.log("[" + "POST".yellow + "] Membership added successfully.")
        res.status(201).json(result)
      }
    )
    .catch(
      (err) => {
        console.log("[" + "POST".yellow + "] Adding membership created server error.")
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
        console.log("[" + "DEL".red + "] Membership deleted successfully.")
        res.status(204).send()
      }
    )
    .catch(
      (err) => {
        console.log("[" + "DEL".red + "] Deleting membership created server error.")
        res.json(err)
      }
    );
};
