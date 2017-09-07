const express = require('express');
const router = express.Router();
const models = require("./models");

// // Show a list of all activities I am tracking, and links to their individual pages
router.route('/activities')
.get((req, res) => {
  models.Activity.findAll().then(function(err, activity) {
    if(err){
      res.send(err);
    } else {
      res.json({activity:exercise});
    }
  })
});

// // Create a new activity for me to track.
router.route('/activities')
.post((req, res) => {
  let newExercise = {
    exercise: req.body.exercise,
    amount: req.body.amount
  };
  models.Activity.create(newExercise).then(function(err, activity){
    if(err){
      res.send(err);
    } else {
      res.json({message: 'created stuff'});
    }
  })
  console.log(newExercise);
});
//
// // Show information about one activity I am tracking, and give me the data I have recorded for that activity.
router.route('/activities/:id')
.get((req, res) => {
  let id = req.params.id;
  models.Activity.findById(id).then(function(err, activity){
    if(err){
      res.send(err);
    } else {
      res.json({activity});
    }
  })
});
//
// // Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
router.route('/activities/:id')
.put((req, res) => {
  models.Activity.update({
    exercise: req.body.exercise
  },{
    where: {
      id: req.params.id
    }
  }).then(function(err, activity){
    if(err){
      res.send(err);
    } else {
      res.json({message: 'Updated activity'});
    }
  })
});
//
// // Delete one activity I am tracking. This should remove tracked data for that activity as well.
router.route('/activities/:id')
.delete((req, res) => {
  models.Activity.destroy({
    where: {
      id: req.params.id
    }},{
      exercise: req.body.exercise,
      amount: req.body.amount
    }).then(function(err, activity){
    if(err){
      res.send(err);
    } else {
      res.json({message: 'Deleted activity'});
    }
  })
});
//
// // Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.
router.route('/activities/:id/stats')
.post((req, res) => {
let newUpdate = {
  exercise: req.body.exercise,
  amount: req.body.amount,
  date: req.body.date
}
models.Activity.create({
  where: {
    id: req.params.id
  }
}, newUpdate).then(function(err, activity){
  if(err){
    res.send(err);
  } else {
    res.json({message: 'Replaced activity'});
  }
})
});
//
// // Remove tracked data for a day.
router.route('/stats')
.delete((req, res) => {
  models.Activity.destroy({
    where: {
      date: req.query.date
    }}).then(function(activity){
      res.json({message: 'Deleted activity'});
    })
});

router.use('/api', router);

module.exports = router;
