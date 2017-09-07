const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const models = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

// entering in initial data for testing
console.log(models.Activity);
// models.Activity.create({
//   exercise: 'Ate Donuts',
//   amount: 7,
//   date: 2004-08-10
// }).then(function(){
//   return models.Activity.findAll();
// }).then(function(apple){
//   console.log(apple.map(function(apple){
//     return apple.exercise;
//   }));
// });

app.listen(3000, () => console.log('Lunch has been cancelled, due to lack of hustle...'));
