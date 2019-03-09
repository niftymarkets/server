const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');

router.get('/', async (req, res) => {
  try {
    const items = await db('items').orderBy('itemId');
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve items at this time"})
  }
})



module.exports = router;