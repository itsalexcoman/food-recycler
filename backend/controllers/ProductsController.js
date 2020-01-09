var db = require('../models/index');

//module.exports.getAllByUser = (req, res) => {
   // ...
//}

//module.exports.getAllByGroup = (req, res) => {
   // ...
//}

module.exports.getOne = (req, res) => {
    db.Products.getOne().then(
           (results) => {
               res.status(200).send({
                   status: "Products.findAll() success",
                   results: results
               });
           }
       ).catch(() => {
           res.status(500).send({
               status: "Products.findAll() error"
           })
       })
};

module.exports.add = (req, res) => {
    db.Products.create({
      name: req.body.name
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
};

 module.exports.update = (req, res) => {
    db.Products.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedProducts => {
        res.json(updatedProducts);
      })
      .catch(err => res.json(err));
};

module.exports.delete = (req, res) => {
    db.Groups.destroy({
      where: { id: req.params.id }
    })
      .then(products => {
        res.json(products);
      })
      .catch(err => res.json(err));
  };
