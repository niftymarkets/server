const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  getWishlist
}

// recipe = user
// ingredient = item
// recipe_ingredients = wishlist

// function getWishlist(userId) {
//   const items = db("users")
//   .join("wishlist", "users.userId", "wishlist.UserId")
//   .join("items", "items.itemId", "wishlist.itemId")
//   .select("items.name", "items.price", "items.description", "item.userId", "item.img_url", "item.availability")
//   .where('users.userId', userId)

//   return items;
// }

function getWishlist(userId) {
  const items = db("wishlist")
  .join("users", "wishlist.userId", "users.userId")
  .join("items", "wishlist.itemId", "items.itemId")
  .select("users.username", "wishlist.wishlistId", "items.UserId as sellerId", "items.itemId", "items.name", "items.price", "items.description", "items.img_url", "items.availability")
  .where('users.userId', userId)


  return items;
}
