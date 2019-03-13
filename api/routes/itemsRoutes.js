const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');


//Get items

router.get('/', async (req, res) => {
  try {
    const items = await db('items').orderBy('itemId');
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve items at this time"})
  }
})


//GET INDIVIDUAL ITEM

router.get('/:id', async (req, res) => {
  try {
    const item = await db('items').where({ itemId: req.params.id });
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Couldn't find item with that id"})
    }
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve the item at this time"})
  }
});


//Make items (post)

router.post('/', async (req, res) => {
  try {
    const item = await db('items').insert(req.body);
    if (item) {
      return res.status(200).json({ message: "Item created successfully" })
    } else {
      return res.status(404).json({ error: "The item could not be added at this time"})
    }
  } catch (error) {
    return res.status(500).json({ error: "The item could not be added at this time"})
  }
});


//EDIT items (put) 

router.put('/:id', async (req, res) => {
  try {
    const edited = await db('items').where({ itemId: req.params.id }).update(req.body);
    const editedItem = await db('items').where({ itemId: req.params.id }).first();
    if (edited) {
      return res.status(200).json(editedItem);
    } else {
      return(res.status(404).json({ error: "The item with the specified ID does not exist"}))
    }
  } catch (error) {
    res.status(500).json({ error: "The item could not be updated at this time."})
  }
});


//DELETE ITEM

router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await db('items').where({ itemId: req.params.id }).first().select('name');
    const deleted = await db('items').where({ itemId: req.params.id }).del();
    if (deleted) {
      return res.status(200).json(`Your item ${deletedItem.name} has been deleted.`);
    } else {
      res.status(404).json({ error: "The item with the specified ID does not exits" })
    }
  } catch (error) {
    res.status(500).json({ error: "The item could not be deleted at this time."})
  }
});

module.exports = router;