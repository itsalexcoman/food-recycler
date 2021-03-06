var db = require('../models/index');

module.exports.getOne = (req, res) => {
  db.Groups.findByPk(req.params.id)
    .then(
      (result) => {
        if (result) {
          console.log("[" + "GET".green + "] Group fetched from database successfully.")
          res.status(200).send({
            status: "success",
            result: result
          })
        } else {
          console.log("[" + "GET".green + "] Group not found.")
          res.status(404).send({
            status: "not found"
          })
        }
      }
    )
    .catch(
      () => {
        console.log("[" + "GET".green + "] Group fetch created server error.")
        res.status(500).send({
          status: "error"
        })
      }
    )
};

module.exports.getAll = (req, res) => {
  db.Groups.findAll()
    .then(
      (result) => {
        if (result.length) {
          console.log("[" + "GET".green + "] Groups fetched from database successfully.")
          res.status(200).send({
            status: "success",
            result: result
          })
        } else {
          console.log("[" + "GET".green + "] No groups in database.")
          res.status(404).send({
            status: "not found"
          })
        }
      }
    )
    .catch(
      () => {
        console.log("[" + "GET".green + "] Groups fetch created server error.")
        res.status(500).send({
          status: "error"
        })
      }
    )
};

module.exports.getUsers = async (req, res, next) => {
  try {
    const currentGroup = await db.Groups.findByPk(req.params.id);
    if (currentGroup) {
      const users = await currentGroup.getUsers({ raw: true });
      if (users.length) {
        console.log("[" + "GET".green + "] Group members fetched successfully.");
        res.status(200).send({
          status: "success",
          result: users
        })
      } else {
        console.log("[" + "GET".green + "] No users in group.");
        res.status(404).send({
          status: "not found"
        })
      }
    } else {
      console.log("[" + "GET".green + "] Group not found.");
      res.status(400).send({
        status: "bad request: group not found"
      })
    }
  } catch (error) {
    console.log("[" + "GET".green + "] Group members fetch created server error.");
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
        console.log("[" + "GET".green + "] Group products fetched successfully.");
        res.status(200).send({
          status: "success",
          result: result
        })
      } else {
        console.log("[" + "GET".green + "] No users in group.");
        res.status(404).send({
          status: "users not found"
        })
      }
    } else {
      console.log("[" + "GET".green + "] Group not found.");
      res.status(400).send({
        status: "bad request: group not found"
      })
    }
  } catch (error) {
    console.log("[" + "GET".green + "] Group products fetch created server error.");
    next(error)
  }
}

module.exports.add = (req, res) => {
  db.Groups.create(req.body)
    .then(
      (result) => {
        console.log("[" + "POST".yellow + "] Group added successfully.")
        res.status(201).json(result)
      }
    )
    .catch(
      (err) => {
        console.log("[" + "POST".yellow + "] Adding group created server error.")
        res.json(err)
      }
    );
};

module.exports.update = (req, res) => {
  db.Groups.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(
      () => {
        console.log("[" + "PUT".blue + "] Group updated successfully.")
        res.status(200).send({
          status: "success"
        })
      }
    )
    .catch(
      (err) => {
        console.log("[" + "PUT".blue + "] Updating group created server error.")
        res.json(err)
      }
    );
};

module.exports.delete = (req, res) => {
  db.Groups.destroy({
    where: { id: req.params.id }
  })
    .then(
      () => {
        console.log("[" + "DEL".red + "] Group deleted successfully.")
        res.status(204).send()
      }
    )
    .catch(
      (err) => {
        console.log("[" + "DEL".red + "] Deleting group created server error.")
        res.json(err)
      }
    );
};
