const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const generateToken = require('../../auth/token-gen')
const { authenticate } = require('../../auth/authenticate')

const db = require('../../data/dbConfig');
const Wishlist = require('../../wishlist/wishlistModel');
const TransactionList = require('../../transactions/transactionsModel')


//GET all users

router.get('/', async (req, res) => {
  try {
    const users = await db('users').orderBy('userId');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve users at this time."})
  }
})


//GET user by id

router.get('/:id', async (req, res) => {
  try {
    const user = await db('users').where({ userId: req.params.id }).first();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "The user with the specified ID does not exist."})
    }
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve the user at this time."})
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


//GET wishlist item by ID

router.get('/:id/wishlist/:wishlistId', async (req, res) => {
  try {
    const wishlistItem = await Wishlist.getWishlistById(req.params.wishlistId);
    res.status(200).json(wishlistItem);
  } catch (error) {
    res.status(500).json(error);
  }
});


//POST to wishlist (create wishlist item)

router.post('/:id/wishlist', async (req, res) => {
  try {
    const wishlist = await Wishlist.getWishlist(req.params.id);
    if (wishlist.map(item => item.itemId).includes(req.body.itemId)) {
      return res.status(404).json({ error: "This item is already on your wishlist."})
    } 
    const item = await db('wishlist').insert(req.body);
    const newWishlist = await db('wishlist');
    if (item) {
      res.status(200).json({ message: "Item added to wishlist!", newWishlist });
    } else {
      return res.status(404).json({ error: "The item could not be added to your wishlist at this time."})
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


//DELETE item from wishlist

router.delete('/:id/wishlist/:wishlistId', async (req, res) => {
  try {
    const newWishlist = await db('wishlist');
    const wishlistItem = await Wishlist.getWishlistById(req.params.wishlistId).del();
    if (wishlistItem) {
        res.status(200).json({ message: "Item removed from wishlist", newWishlist });   
    } else {
      res.status(404).json({ message: "The item with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: "We could not remove the item from your wishlist at this time." });
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
      return(res.status(404).json({ error: "The user with the specified ID does not exist."}))
    }
  } catch (error) {
    res.status(500).json(error)
  }
});


//DELETE USER

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await db('users').where({ userId: req.params.id }).first().select('username');
    const deleted = await db('users').where({ userId: req.params.id }).del();
    if (deleted) {
      return res.status(200).json(`Sorry to see you go, ${deletedUser.username}`);
    } else {
      res.status(404).json({ error: "The user with the specified ID does not exits." })
    }
  } catch (error) {
    res.status(500).json({ error: "The user could not be deleted at this time."})
  }
});


//GET ALL ITEMS FOR USER

router.get('/:id/items', async (req, res) => {
  try {
    const itemList = await db('items').where({ userId: req.params.id })
    res.status(200).json(itemList)
  } catch (error) {
    res.status(500).json({ message: "Could not retrieve user items at this time."})
  }
})


//GET user transactions

router.get('/:id/transactions', async (req, res) => {
  try {
    const transactList = await TransactionList.getTransactionList(req.params.id);
    res.status(200).json(transactList);
  } catch (error) {
    res.status(500).json(error);
  }
});


//GET transaction item by ID

router.get('/:id/transactions/:transactionId', async (req, res) => {
  try {
    const transactionItem = await TransactionList.getTransactionListById(req.params.transactionId);
    res.status(200).json(transactionItem);
  } catch (error) {
    res.status(500).json(error);
  }
});


//POST to transactions (create transactions item)

router.post('/:id/transactions', async (req, res) => {
  try {
    const transaction = await db('transactions').insert(req.body);
    const username = await db('users').where({ userId: req.body.buyerId }).first();
    await db('items').where({ itemId: req.body.itemId }).first().update({ userId: req.params.id, availability: false, username: username.username });
   
    const newTransactionsList = await db('transactions')
    if (transaction) {
      res.status(200).json({ message: `Congratulations on your purchase!`, newTransactionsList });
    } else {
      return res.status(404).json({ error: "You could not purchase the item at this time."})
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


//DELETE item from transactions

router.delete('/:id/transactions/:transactionId', async (req, res) => {
  try {
    const transactionListItem = await TransactionList.getTransactionListById(req.params.transactionId).del();
    const newTransactionsList = await db('transactions');
    if (transactionListItem) {
        res.status(200).json({ message: "Transaction removed from transactions list.", newTransactionsList });   
    } else {
      res.status(404).json({ message: "The transaction with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: "We could not remove the transaction from your transactionlist at this time." });
  }
});


//LOGIN POST

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  const user = await db('users').where({ username }).first();
  try {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken.generateToken(user);
      const id = user.userId;
      res.status(200).json({ message: `Welcome ${user.username}!`, userId: id, token })
    } else {
      res.status(401).json({ message: 'Invalid credentials.'})
    }
  } catch (error) {
    res.status(500).json({ message: "User could not be logged in at this time." })
  }
});


//REGISTER POST

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  user.funds_balance = 0;
  user.img_url = "https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png";

  db('users').insert(user)
    .then(saved => {
      res.status(201).json(user);    //testing purposes
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;