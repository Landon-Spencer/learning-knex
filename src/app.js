const express = require('express');
const app = express();
const PORT = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);
//can remove process.env.NODE_ENV|| and it will still work

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.listen(PORT, () => {
  console.log('Your Knex and Express application are running successfully on port:', PORT);
})

app.get('/pets', function(req, res) {
  knex('pet')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

// app.get('/pets', (req, res) => {
//   knex('pet')
//     .select()
//     .then(pets => {
//       let petNames = pets.map(pet => pet.name)
//       res.json(petNames)
//     })
// })