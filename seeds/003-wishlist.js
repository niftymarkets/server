
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishlist').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('wishlist').insert([
        {wishlistId: 1, userId: 1, itemId: 1},
        {wishlistId: 2, userId: 1, itemId: 2},
        {wishlistId: 3, userId: 1, itemId: 3},
        {wishlistId: 4, userId: 2, itemId: 4},
        {wishlistId: 5, userId: 2, itemId: 5},
        {wishlistId: 6, userId: 2, itemId: 6},
        {wishlistId: 7, userId: 3, itemId: 7},
        {wishlistId: 8, userId: 3, itemId: 8},
        {wishlistId: 9, userId: 3, itemId: 9},
        {wishlistId: 10, userId: 4, itemId: 10},
        {wishlistId: 11, userId: 4, itemId: 11},
        {wishlistId: 12, userId: 5, itemId: 12},

      ]);
    });
};
