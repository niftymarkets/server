const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const generateToken = require('../../auth/token-gen')
const { authenticate } = require('../../auth/authenticate')

const db = require('../../data/dbConfig');
const Wishlist = require('../../wishlist/wishlistModel');

//GET ROUTES

//GET all users

router.get('/', async (req, res) => {
  try {
    const users = await db('users').orderBy('userId');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve users at this time"})
  }
})

//GET user by id

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

//GET user wishlist

router.get('/:id/wishlist', async (req, res) => {
  try {
    const wishlist = await Wishlist.getWishlist(req.params.id);
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json(error);
  }
});

//EDIT USER

router.put('/:id', async (req, res) => {
  try {
    const edited = await db('users').where({ userId: req.params.id }).update(req.body);
    const editedUser = await db('users').where({ userId: req.params.id }).first();
    if (edited) {
      return res.status(200).json(editedUser);
    } else {
      return(res.status(404).json({ error: "The user with the specified ID does not exist"}))
    }
  } catch (error) {
    res.status(500).json(error)
  }
});

//DELETE USER

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await db('users').where({ userId: req.params.id }).first().select('username');
    console.log(deletedUser);
    const deleted = await db('users').where({ userId: req.params.id }).del();
    if (deleted) {
      return res.status(200).json(`Sorry to see you go, ${deletedUser.username}`);
    } else {
      res.status(404).json({ error: "The user with the specified ID does not exits" })
    }
  } catch (error) {
    res.status(500).json({ error: "The user could not be deleted at this time."})
  }
});

//GET ALL ITEMS FOR USER

router.get('/:id/items', async (req, res) => {
  try {
    // const user = await db('users').where({ userId: req.params.id });
    // const itemList = await db('usersItems').where({ userId: req.params.id })
    const itemList = await db('items').where({ userId: req.params.id })

    res.status(200).json(itemList)
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve user items at this time"})
  }
})

//GET user purchases

router.get('/:id/purchases', async (req, res) => {
  try {
    // const user = await db('users').where({ userId: req.params.id });
    // const itemList = await db('usersItems').where({ userId: req.params.id })
    const itemList = await db('items').where({ buyerId: req.params.id })

    res.status(200).json(itemList)
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve user items at this time"})
  }
})

//GET user items sold

router.get('/:id/sold', async (req, res) => {
  try {
    // const user = await db('users').where({ userId: req.params.id });
    // const itemList = await db('usersItems').where({ userId: req.params.id })
    const itemList = await db('items').where({ userId: req.params.id}).where({ availability: "sold" })

    res.status(200).json(itemList)
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve user items at this time"})
  }
})


//LOGIN POST

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  const user = await db('users').where({ username }).first();
  try {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken.generateToken(user);
      res.status(200).json({ message: `Welcome ${user.username}! token:`, token})
    } else {
      res.status(401).json({ message: 'Invalid credentials'})
    }
  } catch (error) {
    res.status(500).json({ message: "Could not be logged in at this time" })
  }
});



//REGISTER POST

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  db('users').insert(user)
    .then(saved => {
      res.status(201).json(user.username);    //change this to just user if need to return hash for some reason
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;