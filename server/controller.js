const Todo = require('../database/model');

const controller = {
  get: (req, res) => {
    Todo.findAll({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(error => console.error(error));
  },
  post: (req, res) => {
    const name2 = req.body.name;
    Todo.create({ name: name2 })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch(error => console.error(error));
  },
  update: (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    Todo.update({ name }, { where: { id } })
      .then((data) => {
        if (data[0] === 1) {
          res.status(202).send(`Updated id ${id} with ${name}`);
        } else {
          res.status(202).send(`Could not update id ${id}`);
        }
      })
      .catch(error => console.error(error));
  },
  delete: (req, res) => {
    const { id } = req.params;
    Todo.destroy({ where: { id } })
      .then((data) => {
        res.status(200).send(`Destroyed id ${id}`);
      })
      .catch(error => console.error(error));
  },
};

module.exports = controller;