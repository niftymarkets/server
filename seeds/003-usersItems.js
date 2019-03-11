
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersItems').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('usersItems').insert([
        {id: 1, userId: 1, itemId: 1},
        {id: 2, userId: 1, itemId: 2},
        {id: 3, userId: 1, itemId: 3},
        {id: 4, userId: 2, itemId: 4},
        {id: 5, userId: 2, itemId: 5},
        {id: 6, userId: 2, itemId: 6},
        {id: 7, userId: 3, itemId: 7},
        {id: 8, userId: 3, itemId: 8},
        {id: 9, userId: 3, itemId: 9},
        {id: 10, userId: 4, itemId: 10},
        {id: 11, userId: 4, itemId: 11},
        {id: 12, userId: 5, itemId: 12},

      ]);
    });
};
