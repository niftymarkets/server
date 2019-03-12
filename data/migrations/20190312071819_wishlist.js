
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wishlist', tbl => {

    tbl.increments('wishlistId')

    tbl.integer('userId').unsigned().references('userId').inTable('users').onDelete("CASCADE").onUpdate("CASCADE");
    tbl.integer('itemId').unsigned().references('itemId').inTable('items').onDelete("CASCADE").onUpdate("CASCADE");

  })
};

exports.down = function(knex, Promise) {
  
};
