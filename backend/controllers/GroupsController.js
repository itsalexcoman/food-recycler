var db = require('../models/index');

module.exports.getOne = (req, res) => {
  db.Groups.findByPk(req.params.id).then(
    (result) => {
      if (result) {
        res.status(200).send({
          status: "success",
          result: result
        })
      } else {
        res.status(404).send({
          status: "not found"
        })
      }
    }
  ).catch(() => {
    res.status(500).send({
      status: "error"
    })
  })
};

module.exports.getAll = (req, res) => {
  db.Groups.findAll().then(
    (result) => {
      if (result) {
        res.status(200).send({
          status: "success",
          result: result
        })
      } else {
        res.status(404).send({
          status: "not found"
        })
      }
    }
  ).catch(() => {
    res.status(500).send({
      status: "error"
    })
  })
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const currentGroup = await db.Groups.findByPk(req.params.id);
    if (currentGroup) {
      const users = await currentGroup.getUsers({ raw: true });
      if (users.length) {
        res.status(200).send({
          status: "success",
          result: users
        })
      } else {
        res.status(404).send({
          status: "not found"
        })
      }
    } else {
      res.status(400).send({
        status: "bad request: group not found"
      })
    }
  } catch (error) {
    next(error)
  }
}

module.exports.getProducts = async (req, res, next) => {
  try {
    const currentGroup = await db.Groups.findByPk(req.params.id);
    if (currentGroup) {
      const users = await currentGroup.getUsers({ raw: true });
      if (users.length) {
        let result = [];
        for (u of users) {
          const currentUser = await db.Users.findByPk(u.id);
          if (currentUser) {
            const products = await currentUser.getProducts({ raw: true });
            if (products.length) {
              products.forEach(p => {
                result.push(p);
              })
            }
          }
        }
        res.status(200).send({
          status: "success",
          result: result
        })
      } else {
        res.status(404).send({
          status: "users not found"
        })
      }
    } else {
      res.status(400).send({
        status: "bad request: group not found"
      })
    }
  } catch (error) {
    next(error)
  }
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
