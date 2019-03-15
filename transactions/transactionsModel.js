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

function getTransactionListById(transactionId) {
  const items = db("transactions")
  .join("users as buyers", "transactions.buyerId", "buyers.userId")
  .join("users as sellers", "transactions.sellerId", "sellers.userId")
  .join("items", "transactions.itemId", "items.itemId")
  .select("transactions.transactionId", "buyers.username as buyer", "transactions.buyerId as buyerId", "sellers.username as seller", "transactions.sellerId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
  .where('transactions.transactionId', transactionId).first();

  return items;
}
