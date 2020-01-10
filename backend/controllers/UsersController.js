var db = require('../models/index');

module.exports.getOne = (req, res) => {
  db.Users.findByPk(req.params.id).then(
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
  db.Users.findAll().then(
    (result) => {
      if (result.length) {
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

module.exports.getProducts = async (req, res, next) => {
  try {
    const currentUser = await db.Users.findByPk(req.params.id);
    if (currentUser) {
      const products = await currentUser.getProducts({ raw: true });
      if (products.length) {
        res.status(200).send({
          status: "success",
          result: products
        })
      } else {
        res.status(404).send({
          status: "not found"
        })
      }
    } else {
      res.status(400).send({
        status: "bad request: user not found"
      })
    }
  } catch (error) {
    next(error)
  }
}

module.exports.add = (req, res) => {
  db.Users.create(req.body)
  .then(
    result => { res.status(201).json(result) }
  )
  .catch(
    err => res.json(err)
  );
};

module.exports.update = (req, res) => {
  db.Users.update({ name: req.body.name }, { where: { id: req.params.id } })
    .then(updatedUsers => {
      res.json(updatedUsers);
    })
    .catch(err => res.json(err));
};

module.exports.delete = (req, res) => {
  db.Users.destroy({
    where: { id: req.params.id }
  })
  .then(
    res.status(204).send()
  )
  .catch(
    err => res.json(err)
  );
};
