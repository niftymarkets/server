const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');

router.get('/', async (req, res) => {
  try {
    const users = await db('users').orderBy('userId');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve users at this time"})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await db('users').where({ userId: req.params.id });
    // const itemList = await db('usersItems').where({ userId: req.params.id })
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "couldn't find user with that id"})
    }
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve user items at this time"})
  }
})

router.get('/:id/items', async (req, res) => {
  try {
    const user = await db('users').where({ userId: req.params.id });
    const itemList = await db('usersItems').where({ userId: req.params.id })
    res.status(200).json({ user, itemList })
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve user items at this time"})
  }
})



module.exports = router;