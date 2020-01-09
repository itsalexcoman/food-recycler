var db = require('../models/index');

module.exports.findAll = (req, res) => {
    db.Products.findAll().then(
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

module.exports.findOne = (req, res) => {
    db.Products.findByPk(req.params.id, {
        include: [{
          model: db.Products
        }]
      }).then(
        (result) => {
            if(result) {
                res.status(200).send(result)
            } else {
                res.status(404).send()
            }
        }
    )
}