var db = require('../models/index');

module.exports.getOne = (req, res) => {
  db.Users.findByPk(req.params.id)
    .then(
      (result) => {
        if (result) {
          console.log("[" + "GET".green + "] User fetched from database successfully.")
          res.status(200).send({
            status: "success",
            result: result
          })
        } else {
          console.log("[" + "GET".green + "] User not found in database.")
          res.status(404).send({
            status: "not found"
          })
        }
      }
    )
    .catch(
      () => {
        console.log("[" + "GET".green + "] User fetch created server error.")
        res.status(500).send({
          status: "error"
        })
      }
    );
};

module.exports.getAll = (req, res) => {
  db.Users.findAll()
    .then(
      (result) => {
        if (result.length) {
          console.log("[" + "GET".green + "] Users fetched from database successfully.")
          res.status(200).send({
            status: "success",
            result: result
          })
        } else {
          console.log("[" + "GET".green + "] No users in database.")
          res.status(404).send({
            status: "not found"
          })
        }
      }
    )
    .catch(
      () => {
        console.log("[" + "GET".green + "] User fetch created server error.")
        res.status(500).send({
          status: "error"
        })
      }
    );
};

module.exports.getProducts = async (req, res, next) => {
  try {
    const currentUser = await db.Users.findByPk(req.params.id);
    if (currentUser) {
      const products = await currentUser.getProducts({ raw: true });
      if (products.length) {
        console.log("[" + "GET".green + "] User's products fetched from database successfully.")
        res.status(200).send({
          status: "success",
          result: products
        })
      } else {
        console.log("[" + "GET".green + "] User has no products.")
        res.status(404).send({
          status: "not found"
        })
      }
    } else {
      console.log("[" + "GET".green + "] User does not exist.")
      res.status(400).send({
        status: "bad request: user not found"
      })
    }
  } catch (error) {
    console.log("[" + "GET".green + "] User products fetch created server error.")
    next(error)
  }
};

module.exports.add = (req, res) => {
  db.Users.create(req.body)
    .then(
      (result) => {
        console.log("[" + "POST".yellow + "] User added successfully.")
        res.status(201).json(result)
      }
    )
    .catch(
      (err) => {
        console.log("[" + "POST".yellow + "] Adding user created server error.")
        res.json(err)
      }
    );
};

module.exports.update = (req, res) => {
  db.Users.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(
      () => {
        console.log("[" + "PUT".blue + "] User updated successfully.")
        res.status(200).send({
          status: "success"
        })
      }
    )
    .catch(
      (err) => {
        console.log("[" + "PUT".blue + "] Updating user created server error.")
        res.json(err)
      }
    );
};

module.exports.delete = (req, res) => {
  db.Users.destroy({
    where: { id: req.params.id }
  })
    .then(
      () => {
        console.log("[" + "DEL".red + "] User deleted successfully.")
        res.status(204).send()
      }
    )
    .catch(
      (err) => {
        console.log("[" + "DEL".red + "] Deleting user created server error.")
        res.json(err)
      }
    );
};