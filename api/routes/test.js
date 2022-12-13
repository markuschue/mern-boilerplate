const express = require('express');
const router = express.Router();
const Test = require('../models/test.js');

router.route('/')
  .get(function(req, res, next) {
    Test.find(function(err, tests) {
      if (err)
        return next(err);
      else
        res.status(200).json(tests);
    });
  })

  .post(function(req, res, next) {
    const test = new Test({
      name: req.body.name,
      age: req.body.age
    });
    test.save().then(() => {
      res.status(200).send('Success uploading new test.');
    });
  })

  .delete(function(req, res, next) {
    Test.deleteMany({}, function (err) {
      if (err)
        return next(err);
      else 
        res.status(200).send('Success deleting all tests.');
    });
  });

router.route('/:id')
  .get(function(req, res, next) {
    Test.findById(req.params.id, function(err, test) {
      if (err)
        return next(err);
      else if (test)
        res.status(200).json(test);
      else
        res.status(404).send('Test not found');
    });
  })

  .put(function(req, res) {
    Test.replaceOne(
      {_id: req.params.testID},
      {$set: req.body},
      function (err) {
        if (err)
          next(err);
        else
          res.status(200).send('Test replaced successfully.');
        res.status(404).send('No test found');
      }
    );
  })

  .patch(function(req, res) {
    Test.updateOne(
      {_id: req.params.testID},
      req.body.patch,
      function (err) {
        if (err)
          next(err);
        else
          res.status(200).send('Test patched successfully.');
        res.status(404).send('No test found');
      }
    );
  })

  .delete(function(req, res) {
    Test.deleteOne({_id: req.params.testID}, function (err) {
      if (err)
        next(err);
      else
        res.status(200).send('Test deleted successfully.');
      res.status(404).send('No test found');
    });
  });

module.exports = router;