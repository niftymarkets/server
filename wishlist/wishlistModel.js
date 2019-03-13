const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  getWishlist,
  getWishlistById
}

function getWishlist(userId) {
  const items = db("wishlist")
  .join("users", "wishlist.userId", "users.userId")
  .join("items", "wishlist.itemId", "items.itemId")
  .select("users.username", "wishlist.wishlistId", "items.UserId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
  .where('users.userId', userId)

  return items;
}

function getWishlistById(wishlistId) {
  const items = db("wishlist")
  .join("users", "wishlist.userId", "users.userId")
  .join("items", "wishlist.itemId", "items.itemId")
  .select("users.username", "wishlist.wishlistId", "items.UserId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
  .where('wishlist.wishlistId', wishlistId)
  
  return items;
}
