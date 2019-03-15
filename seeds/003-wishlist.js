
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wishlist').del()
    .then(function () {
      // Inserts seed entries
      return knex('wishlist').insert([
        {wishlistId: 1, userId: 1, itemId: 20},
        {wishlistId: 2, userId: 1, itemId: 14},
        {wishlistId: 3, userId: 1, itemId: 5},
        {wishlistId: 4, userId: 2, itemId: 1},
        {wishlistId: 5, userId: 2, itemId: 12},
        {wishlistId: 6, userId: 2, itemId: 17},
        {wishlistId: 7, userId: 3, itemId: 2},
        {wishlistId: 8, userId: 3, itemId: 4},
        {wishlistId: 9, userId: 3, itemId: 16},
        {wishlistId: 10, userId: 4, itemId: 5},
        {wishlistId: 11, userId: 4, itemId: 1},
        {wishlistId: 12, userId: 5, itemId: 18},

        // {userId: 1, itemId: 20},
        // {userId: 1, itemId: 14},
        // {userId: 1, itemId: 5},
        // {userId: 2, itemId: 1},
        // {userId: 2, itemId: 12},
        // {userId: 2, itemId: 17},
        // {userId: 3, itemId: 2},
        // {userId: 3, itemId: 4},
        // {userId: 3, itemId: 16},
        // {userId: 4, itemId: 5},
        // {userId: 4, itemId: 1},
        // {userId: 5, itemId: 18},
      ]);
    });
};
