const router = require('express').Router();
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
  try {
    const result = await mongodb.getDb().db('CSE341').collection('contacts').find();
    const contacts = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;