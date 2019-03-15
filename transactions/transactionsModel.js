const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  getTransactionList,
  getTransactionListById
}

function getTransactionList(userId) {
  const items = db("transactions")
  .join("users as buyers", "transactions.buyerId", "buyers.userId")
  .join("users as sellers", "transactions.sellerId", "sellers.userId")
  .join("items", "transactions.itemId", "items.itemId")
  .select("transactions.transactionId", "buyers.username as buyer", "transactions.buyerId as buyerId", "sellers.username as seller", "transactions.sellerId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
  .where('buyers.userId', userId).orWhere("sellers.userId", userId)
 

  

  return items;
}

// function getTransactionListById(transactionId) {
//   const items = db("transactions")
//   .join("users", "transactions.userId", "users.userId")
//   .join("items", "transactions.itemId", "items.itemId")
//   .select("users.username", "transactions.transactionId", "transactions.UserId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
//   .where('transactions.transactionId', transactionId)
  
//   return items;
// }

function getTransactionListById(transactionId) {
  const items = db("transactions")
  .join("users as buyers", "transactions.buyerId", "buyers.userId")
  .join("users as sellers", "transactions.sellerId", "sellers.userId")
  .join("items", "transactions.itemId", "items.itemId")
  .select("transactions.transactionId", "buyers.username as buyer", "transactions.buyerId as buyerId", "sellers.username as seller", "transactions.sellerId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
  .where('transactions.transactionId', transactionId).first();

  return items;
}

// function getWishlistById(wishlistId) {
//   const items = db("wishlist")
//   .join("users", "wishlist.userId", "users.userId")
//   .join("items", "wishlist.itemId", "items.itemId")
//   .select("users.username", "wishlist.wishlistId", "items.UserId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
//   .where('wishlist.wishlistId', wishlistId)
  
//   return items;