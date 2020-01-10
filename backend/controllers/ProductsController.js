var db = require('../models/index');

module.exports.getOne = (req, res) => {
  db.Products.findByPk(req.params.id).then(
    (result) => {
      if (result) {
        res.status(200).send({
          status: "success",
          result: result
        });
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

module.exports.add = (req, res) => {
  db.Products.create(req.body)
  .then(
    result => { res.status(201).json(result) }
  )
  .catch(
    err => res.json(err)
  );
};

module.exports.update = (req, res) => {
  db.Products.update({ name: req.body.name }, { where: { id: req.params.id } })
    .then(updatedProducts => {
      res.json(updatedProducts);
    })
    .catch(err => res.json(err));
};

module.exports.delete = (req, res) => {
  db.Products.destroy({
    where: { id: req.params.id }
  })
  .then(
    res.status(204).send()
  )
  .catch(
    err => res.json(err)
  );
};