const Todo = require('./model');

const data = [
    {
        name: 'Eat Breakfast'
    },
    {
        name: 'Eat Lunch'
    },
    {
        name: 'Eat Dinner'
    },
    {
        name: 'Eat Dessert'
    },
];

Todo
    .sync({ force: false })
    .then(() => {
        Todo.bulkCreate(data)
            .then(() => console.log('Added data'));
    });